import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import Exclusive from './Home/Exclusive';
import BiiddingModal from './Shared/BiiddingModal';

const Exclusives = () => {
    const [bid, setBid] = useState(null)
    const url = 'http://localhost:5000/products'
    const { data } = useProducts(url)
    const menu = <>
        <li className='btn btn-secondary btn-sm rounded-none hover:bg-accent'>Auction</li>
        <li className='btn btn-secondary btn-sm rounded-none hover:bg-accent'>Featured</li>
        <li className='btn btn-secondary btn-sm rounded-none hover:bg-accent'>Top Bid</li>
        <li className='btn btn-secondary btn-sm rounded-none hover:bg-accent'>Recent</li>
    </>
    return (
        <div className='font-primary px-10 lg:px-24 mt-40'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <h2 className='text-4xl font-bold mt-10 lg:my-10'>Explore NFTs</h2>
                <div className='space-x-3 my-6 lg:my-10 '> {menu}</div>
            </div>

            <div className="exclusive grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-5">
                {
                    data.slice(0, 8).map(product => <Exclusive
                        key={product._id}
                        product={product}
                        setBid={setBid}
                    ></Exclusive>)
                }
            </div>
            {
                bid && <BiiddingModal
                    setBid={setBid}
                    bid={bid}
                ></BiiddingModal>
            }
        </div>
    );
};

export default Exclusives;