const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KM4kNB5bxbTAPet3oQkaIbiR70N8CYRijYvkfTfetTnUGy8LZQhQyEcCxLGPpxEw2ToPLtvYzT0laJNzgySecJ8001fLKIGL6');

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());
// - API routes
app.get('/',(request, response) => response.status(200).send('hello word'))

app.post('/payments/create', async function(request,response){
    const total = request.query.total;
    console.log('Payment Request Received for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    // 202 -> OK- created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command

exports.api = functions.https.onRequest(app);
// Example endpoint 
// http://localhost:5001/challenge-ab023/us-central1/api
