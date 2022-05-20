import React from 'react';
import { toast } from 'react-toastify';

const BookingModal = ({ product, setProduct, refetch }) => {

    const handleDelete = () => {
        const url = `http://localhost:5000/addedProducts/${product._id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setProduct(null)
                    refetch()
                    toast("You have deleted your item successfully")
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-primary">
                    <h3 class="font-bold text-lg text-white">Do You want to Delete {product.productName}</h3>
                    <p class="py-4 text-white">If you delete it now it will permanently delete. You will never get it back again.</p>
                    <div class="modal-action">
                        <button onClick={handleDelete} className="btn btn-error">Delete</button>
                        <label for="my-modal-6" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;