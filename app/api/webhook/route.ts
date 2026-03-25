import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  // ✅ HANDLE PAYMENT SUCCESS
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;

    if (!customerEmail) {
      console.error("No customer email found");
      return NextResponse.json({ received: true });
    }

    // ✅ USE METADATA (RELIABLE)
    const product = session.metadata?.product;

    let pdfUrl = "";

    if (product === "mirror") {
      pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/pdfs/Evaltree_The_Mirror_$45_v2.pdf`;
    } else if (product === "map") {
      pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/pdfs/Evaltree_The_Map_$95_v2.pdf`;
    } else if (product === "reckoning") {
      pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/pdfs/Evaltree_The_Reckoning_$295_v2.pdf`;
    }

    try {
      // 👉 SEND EMAIL VIA BREVO
      const userName = customerEmail.split("@")[0];
      const productName =
        product === "mirror"
          ? "The Mirror"
          : product === "map"
          ? "The Map"
          : "The Reckoning";
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY as string,
        },
        body: JSON.stringify({
          sender: {
            email: "support@evaltree.com",
            name: "Evaltree",
          },
          to: [{ email: customerEmail }],
          subject: "Your Evaltree Intelligence Document",
          htmlContent: `
          <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1A1A1A; line-height: 1.6;">

            <h2 style="color: #0D2137; font-size: 22px; margin-bottom: 16px;">
              Your Evaltree Intelligence Document Is Ready
            </h2>

            <p>
              Hi ${userName},
            </p>

            <p>
              Thank you for your purchase of <strong>${productName}</strong>.
            </p>

            <p>
              Based on your responses, we have prepared your intelligence document. 
              This document reflects real, documented outcomes from individuals in situations comparable to yours — including both successful and unsuccessful paths.
            </p>

            <p>
              This is not advice. It is a structured view of what has actually happened to others, presented so you can make a clearer decision.
            </p>

            <div style="margin: 24px 0; text-align: center;">
              <a href="${pdfUrl}" 
                style="background-color: #B7860B; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                Download ${productName}
              </a>
            </div>

            <p>
              If the button above does not work, you can access your document using the link below:
            </p>

            <p style="word-break: break-all; font-size: 14px; color: #1A4A7A;">
              ${pdfUrl}
            </p>

            <hr style="margin: 32px 0; border: none; border-top: 1px solid #DEE2E6;" />

            <p style="font-size: 14px; color: #6C757D;">
              If you have any questions or need assistance, you can reply to this email or contact us at 
              <strong>support@evaltree.com</strong>.
            </p>

            <p style="font-size: 14px; color: #6C757D;">
              We operate a refund-first policy. If this document is not useful to you, simply reply with your order reference and we will process your refund promptly.
            </p>

            <p style="margin-top: 24px;">
              — Evaltree  
              <br />
              Career Decision Intelligence
            </p>

          </div>
          `,
        }),
      });

      console.log("Email sent to:", customerEmail);

    } catch (error) {
      console.error("Brevo email error:", error);
    }
  }

  return NextResponse.json({ received: true });
}