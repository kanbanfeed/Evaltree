import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json();

    let priceId = "";

    if (product === "mirror") {
      priceId = process.env.STRIPE_PRICE_MIRROR!;
    } else if (product === "map") {
      priceId = process.env.STRIPE_PRICE_MAP!;
    } else if (product === "reckoning") {
      priceId = process.env.STRIPE_PRICE_RECKONING!;
    } else {
      return NextResponse.json(
        { error: "Invalid product" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",

      // ✅ VERY IMPORTANT
      customer_creation: "always",

      // ✅ ADD METADATA (BEST PRACTICE)
      metadata: {
        product,
      },

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Checkout Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}