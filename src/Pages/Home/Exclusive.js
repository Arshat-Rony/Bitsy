import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { FaEthereum } from "react-icons/fa"
const Exclusive = ({ product, children }) => {
    const { productName, thumbpicture, ethar, sellerName, price } = product;
    let [count, setCount] = useState(0)
    if (count > 1) {
        setCount(count - 2);
    }

    return (
        <div className="card bg-secondary shadow-md shadow-pink-400">
            <figure className="px-10 pt-10">
                <img src={thumbpicture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                {children}
                <div className='flex justify-between items-center w-full'>
                    <p className='text-sm'>Highest Bid at {price}</p>
                    <button className="btn btn-primary flex items-center gap-4 justify-center relative left-8 rounded-none hover:bg-accent">
                        <AiOutlineShoppingCart />
                        Buy Now</button>
                </div>
                <h2 className="text-start font-bold text-xl">{productName}</h2>
                <p className='text-sm'>By @{sellerName.split(" ").join("_")} </p>
                <div className="card-actions flex items-center justify-between w-full">

                    <p className='flex items-center'>
                        <span className="bg-accent p-2 rounded-full mr-1"><FaEthereum /> </span>
                        {ethar.slice(1, ethar[ethar.length])} ETH</p>
                    <button onClick={() => {

                        setCount(count + 1)
                    }} className={`flex items-center justify-center `}>
                        <BsSuitHeart className={`${count > 0 && "text-red-600"}`} />
                        7.{count}k
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;