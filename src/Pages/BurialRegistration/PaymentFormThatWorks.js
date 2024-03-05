import {withRouter} from 'react-router-dom'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'

const PaymentFormThatWorks = () =>{
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const cardElement = elements.getElement(CardElement)
        console.log('card', cardElement)
        console.log('stripe', stripe)
    }
    return (
        <form onSubmit ={handleSubmit}>
            <cardElement />
            <button> Pay</button>

        </form>
    )






}