import React from 'react';

const Item = ({ item, setProduct }) => {
    const { description, price, productName, img } = item;
    return (
        <div class="card w-11/12 mx-auto  glass mt-5">
            <div class="card-body  flex justify-between flex-row ">
                <div className='w-6/12 text-left'>
                    <figure><img width="100px" src={img} alt="seller" /></figure>
                </div>
                <div className="w--6/12 flex justify-between items-center">
                    <div className='w-6/12'>
                        <h2 class="font-bold text-2xl capitalize">{productName}</h2>
                        <p>{description}</p>
                        <p className='text-sm mt-4'>Price : {price}</p>
                    </div>
                    <div class="card-actions justify-end w-6/12 flex-col items-end">

                        <label for="my-modal-6" onClick={() => setProduct(item)} class="btn btn-error">Delete</label>
                        <label for="update-modal" onClick={() => setProduct(item)} class="btn btn-success">Update</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;