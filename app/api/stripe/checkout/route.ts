import Stripe from "stripe";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type Plan = "single" | "pack" | "mirror" | "map" | "reckoning" | "map_upsell";

export async function POST(req: Request) {
  try {
    // 1) Parse request safely
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const plan = body?.plan as Plan | undefined;
    const briefSlug = typeof body?.briefSlug === "string" ? body.briefSlug : "";
    const emailRaw = typeof body?.email === "string" ? body.email : "";
    const email = emailRaw.trim().toLowerCase();

    const validPlans: Plan[] = ["single", "pack", "mirror", "map", "reckoning", "map_upsell"];
    if (!plan || !validPlans.includes(plan)) {
      return NextResponse.json(
        { error: "Missing/invalid 'plan'." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Missing 'email'. Please log in again." },
        { status: 400 }
      );
    }

    if (plan === "single" && !briefSlug) {
      return NextResponse.json(
        { error: "Missing 'briefSlug' for single brief purchase." },
        { status: 400 }
      );
    }

    // 2) Validate env
    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { error: "STRIPE_SECRET_KEY is missing on server" },
        { status: 500 }
      );
    }

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    // 3) Price config
    const PRICES: Record<Plan, string> = {
      single:     process.env.STRIPE_PRICE_SINGLE!,
      pack:       process.env.STRIPE_PRICE_PACK!,
      mirror:     process.env.STRIPE_PRICE_MIRROR!,
      map:        process.env.STRIPE_PRICE_MAP!,
      reckoning:  process.env.STRIPE_PRICE_RECKONING!,
      map_upsell: process.env.STRIPE_PRICE_MAP!,
    };

    const price = PRICES[plan];
    if (!price) {
      return NextResponse.json(
        { error: "Missing Stripe price ID for this plan." },
        { status: 500 }
      );
    }

    // 4) Success URL
    const successUrl =
      plan === "single"
        ? `${origin}/evaltree/thank-you?session_id={CHECKOUT_SESSION_ID}&slug=${encodeURIComponent(briefSlug)}`
        : plan === "pack"
        ? `${origin}/evaltree/download-pack?session_id={CHECKOUT_SESSION_ID}`
        : `${origin}/evaltree/thank-you?session_id={CHECKOUT_SESSION_ID}`;

    // 5) Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      customer_creation: "always",
      line_items: [{ price, quantity: 1 }],
      allow_promotion_codes: false,
      success_url: successUrl,
      cancel_url: `${origin}/evaltree?canceled=1`,
      metadata: {
        plan,
        source: "evaltree",
        ...(plan === "single" ? { briefSlug } : {}),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error("Checkout error:", e?.message || e);
    return NextResponse.json(
      { error: e?.message || "Checkout failed" },
      { status: 500 }
    );
  }
}
