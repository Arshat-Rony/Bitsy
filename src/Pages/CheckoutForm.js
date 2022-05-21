import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from './Shared/Loading';

const CheckoutForm = ({ user, product }) => {
    const name = user.displayName;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [loading, setLoading] = useState(true)
    const { price } = product;
    const url = `http://localhost:5000/create-payment-intent`
    useEffect(() => {

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [url, price])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setError(error?.message)
        setSuccess(null)


        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
        } else {
            if (paymentIntent.id) {
                setError('')
                setTransactionId(paymentIntent.id)
                setSuccess(`Congrates Your payment is completed`)
                setLoading(false)

            }
        }

    }
    // if (loading) {
    //     return <Loading type="spokes" color="red"></Loading>
    // }

    return (
        <div className='relative'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    transactionId || <button type="submit" className='btn-success btn btn-sm absolute top-40 right-2' disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                }
            </form>
            {error && <p className='text-red-500 font-bold relative top-20'>{error}</p>}

            {success && <div className='text-green-500 font-bold relative top-14'>
                <p className='text-blue-500'>{success}</p>
                <p>Your Transaction Id : <span className='text-orange-300'>{transactionId}</span></p>
            </div>}

        </div>
    );
};

export default CheckoutForm;