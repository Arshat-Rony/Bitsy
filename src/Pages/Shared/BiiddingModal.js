import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../firebaseinit';

const BiiddingModal = ({ bid, setBid }) => {
    const [user] = useAuthState(auth)
    const { productName, thumbpicture, ethar, sellerName, price } = bid;
    const handleBidBtn = (e) => {
        e.preventDefault()
        console.log("I")
    }
    return (
        <div>
            <input type="checkbox" id="bidding-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label htmlFor="bidding-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">Buying : {productName}</h3>
                    <form onSubmit={handleBidBtn} className='booking-form text-center space-y-3 mt-10'>
                        <input type="text" name='product-name' placeholder={productName} className="input input-bordered w-full max-w-xs bg-secondary" />
                        <input type="text" disabled placeholder="Your name" value={user?.displayName || ''} name="name" className="input font-semibold input-bordered w-full max-w-xs bg-secondary capitalize" />
                        <input type="email" disabled placeholder="Your email" value={user?.email || ''} className="input input-bordered font-semibold w-full max-w-xs bg-secondary" />
                        <input type="text" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs font-semibold bg-secondary" />
                        <Link to={`/payment/${bid._id}`} type="submit" className="btn btn-accent w-full max-w-xs">Buy</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BiiddingModal;