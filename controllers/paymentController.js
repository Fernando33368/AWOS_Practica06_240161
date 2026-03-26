import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPayment = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Monto inválido" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',

      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: 'Pago AWOS'
            },
            unit_amount: parseInt(amount) * 100
          },
          quantity: 1
        }
      ],

      success_url: 'http://localhost:4000/payment?success=true',
      cancel_url: 'http://localhost:4000/payment?cancel=true'
    });

    res.json({ id: session.id });

  } catch (error) {
    console.error("Error al realizar el pago:", error);
    res.status(500).json({ error: error.message });
  }
};