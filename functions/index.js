const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LpAMaSFJI7Uhs5aClv39RKeT720JNeL0thlkgpJH0NSjerAqUuiMxmcbRqodXSw9UXhm24F5ry1bSHVwFwu4scG00NkyFkiSJ')

//api

//app config
const app = express();

//middelwares
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved:', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'usd',
    });

    //ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//listen commands
exports.api = functions.https.onRequest(app);