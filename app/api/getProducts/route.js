import Stripe from "stripe.core";
import { NextResponse } from "next/server";

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = stripe.prices.list({
    limit: 2,
  });

  return NextResponse.json(prices.data.reverse());
}
