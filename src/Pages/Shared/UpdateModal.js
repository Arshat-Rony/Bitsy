import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebaseinit';

const UpdateModal = ({ product, setProduct, refetch }) => {
    const [user] = useAuthState(auth)
    const { _id } = product;

    const handleUpdateBtn = (e) => {
        e.preventDefault()
        const updateProduct = {
            productName: product.productName,
            name: user?.displayName,
            email: user?.email,
            price: e.target.price.value,
        }
        const url = `http://localhost:5000/addedProducts/${_id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    setProduct(null)
                    refetch()
                    toast("Your product is updated")
                }
            })
        console.log(updateProduct)

    }
    return (
        <div>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">Updating : {product.productName}</h3>
                    <form onSubmit={handleUpdateBtn} className='booking-form text-center space-y-3 mt-10'>
                        <input type="text" name='product-name' placeholder={product.productName} className="input input-bordered w-full max-w-xs bg-secondary" />
                        <input type="text" disabled placeholder="Your name" value={user?.displayName || ''} name="name" className="input font-semibold input-bordered w-full max-w-xs bg-secondary capitalize" />
                        <input type="email" disabled placeholder="Your email" value={user?.email || ''} className="input input-bordered font-semibold w-full max-w-xs bg-secondary" />
                        <input type="text" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs font-semibold bg-secondary" />
                        <input type="file" name='image' className="input input-bordered w-full max-w-xs font-semibold bg-secondary" />
                        <input type="submit" value="Update" className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;