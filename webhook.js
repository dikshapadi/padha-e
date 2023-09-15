import crypto from 'crypto';
import express from 'express';

const app = express();
const webhookSecret = 'padha-e'; // Replace with your actual webhook secret
console.log("outside function");

export const handleRazorpayWebhook = (req, res) => {
  const { body, headers } = req;
  const signature = headers['x-razorpay-signature'];
  console.log("Insidde function");

  // Verify the webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(JSON.stringify(body))
    .digest('hex');

  if (signature === expectedSignature) {
    const paymentId = body.payload.payment.entity.id;
    const paymentStatus = body.payload.payment.entity.status;

    console.log(`Payment ID: ${paymentId}, Status: ${paymentStatus}`);
    // res.redirect('/college/dashboard'); // Use this if you want to redirect

    res.status(200).end();
  } else {
    console.error('Invalid webhook signature');
    res.status(400).end();
  }
};
