import React from 'react';
import img from "../../../src/assests/Images/Banner/nft-cards (1).png"
import bgPic from "../../.././src/assests/Images/Banner/bg-banner2 (1).png"
import { FaUpload } from 'react-icons/fa'
import './Banner.css'
const Banner = () => {
    return (

        <div>
            <div className='bg-secondary flex flex-col items-center lg:flex-row-reverse py-20 px-8 lg:px-24 '>
                <img src={img} className='flex-1' alt="" />
                <div className='font-primary mt-10 lg:mt-0 flex-1'>
                    <p>Create and Sell NFTs Here</p>
                    <h1 className='text-6xl lg:text-8xl font-bold'>Explore, buy, and sell exceptional NFTs.</h1>
                    <p>It's crafted with the latest trend of design & coded with all modern approaches.</p>
                    <button className="btn-accent btn flex items-center gap-4 mt-10">
                        <FaUpload />
                        Upload Item</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;