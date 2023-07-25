import Stripe from "stripe"

// the exclamtion mark (!) is to fix the typescript error
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion:"2022-11-15",
  typescript: true
})