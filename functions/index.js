const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51O2imWKagkfSGuynX5nozrYMqcWoktCaS7SBUrPUuwhLfvQosWxzKyu6tzoELXvkV0GwOuIG8kbJ5MTZ9XgcnHB200nIAFimwC",
);

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello coders"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "zar",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
