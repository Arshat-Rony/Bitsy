import React from 'react';
import useProducts from '../../hooks/useProducts';
import Timer from '../Shared/Timer';
import Exclusive from './Exclusive';

const LiveBid = () => {
    const url = 'http://localhost:5000/products'
    const { data } = useProducts(url)
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    time.setDate(time.getDate() + 3)
    return (
        <div className='px-10 lg:px-20 mt-36'>
            <h2 className='text-4xl font-bold my-12'>Live Bidding</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                {
                    data.slice(8, 13).map(product =>
                        <Exclusive
                            key={product._id}
                            product={product}
                        >
                            <Timer expiryTimestamp={time}></Timer>
                        </Exclusive>
                    )
                }
            </div>

        </div>
    );
};

export default LiveBid;