import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import auth from './firebaseinit';

const Payment = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const url = `http://localhost:5000/product/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [url])
    const { productName, thumbpicture, ethar, sellerName, price } = product
    const stripePromise = loadStripe('pk_test_51L0mirGh3CcvB5xE649I2ZRsP8ds0hsUJirzcxky8hA7cfTdTvTdLD2a18T7q27fnC3efjjSHYdruvEOFweezeyc00eH8SOPQO');
    return (
        <div className='flex items-center justify-center flex-col lg:flex-row  gap-5 h-screen'>
            <div class="card w-96 shadow-xl image-full">
                <figure><img className='w-full' src={thumbpicture} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 className='text-2xl font-bold capitalize  text-white'>Hello {user.displayName}</h2>
                    <h2 class="card-title  text-white">You are Paying For {productName}</h2>
                    <p className='text-sm text-white'>{price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 min-h-[240px] shadow-xl mt-8 lg:mt-0">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm user={user} product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;