require('dotenv').config()

const cors = require('cors')

const express = require("express")
const app = express()

app.use(express.json())

app.use(express.static('stuff'))

/*
app.use(
   cors({
      origin : "http://localhost:5500"

   })
)
*/


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.listen(3000);

const burialOptions = new Map([
    [1, { priceInCents: 390000, name: "Prepaid Burial"}],
    [2, { priceInCents: 440000, name: "Prepaid Burial with weekend/holiday fee"}],
    [3, { priceInCents: 590000, name: "First Time Payment Burial"}],
    [4, { priceInCents: 640000, name: "First Time Payment Burial with weekend/holdiay fee"}],
    [5, { priceInCents: 250000, name: "Children's Burial"}],
    [6, { priceInCents: 300000, name: "Children's Burial with weekend/holdiay fee"}],
 ])

 app.post('/create-checkout-session', async (req, res)=> {
   //res.json({ url: "Hi" });
   
   try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: req.body.items.map(item => {
          const burialOption = burialOptions.get(item.id)
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: burialOption.name,
              },
              unit_amount: burialOption.priceInCents,
            },
            quantity: item.quantity,
          }
        }),
        success_url: `${process.env.SERVER_URL}/success.html`,
        cancel_url: `${process.env.SERVER_URL}/cancel.html`,
      })
      res.json({ url: session.url })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
    
  }
  
 
 )
