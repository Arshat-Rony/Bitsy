import React from 'react';

const Topcollection = ({ collection }) => {
    const { heading, ethar, owner, stock, img } = collection;
    return (
        <div>
            <div class="card w-96 bg-secondary shadow-xl mt-10">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title flex justify-between items-center">
                        {heading}
                        <div class="badge badge-secondary">{ethar} ETH</div>
                    </h2>
                    <div className='flex justify-between'>
                        <p><span className='text-slate-400 font-bold'>Owner</span> : {owner}</p>
                        <p>{stock} in Stock</p>
                    </div>
                    <div class="card-actions justify-end mt-8 mb-0">
                        <button className="btn btn-primary w-full shadow-md shadow-pink-300 hover:bg-accent">Place a Bid</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topcollection;