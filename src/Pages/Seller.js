import React from 'react';

const Seller = ({ seller }) => {
    const { price, sellerName, thumbpicture } = seller;
    return (
        <div className="card w-96 mx-auto bg-secondary shadow-xl">
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <figure className=" bg-black rounded-full">
                        <img height="70px" width="70px" src={thumbpicture} alt="Seller pic" className="rounded-xl" />
                    </figure>

                    <div>
                        <h2 className="card-title">{sellerName}</h2>
                        <p className='text-sm'>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seller;