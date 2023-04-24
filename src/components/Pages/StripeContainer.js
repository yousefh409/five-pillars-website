import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MrSm9Ipjb8xd8GP5cQIYeRavMUQDHys9hzs4GnIPo7TtQW8fiNfaxixJSIdXyIwsKSDAQ2XJCfIiDbUPzRQOHDF00IStxnPIj"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}