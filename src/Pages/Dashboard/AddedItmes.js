import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebaseinit';
import BookingModal from '../Shared/BookingModal';
import Loading from '../Shared/Loading';
import UpdateModal from '../Shared/UpdateModal';
import Item from './Item';

const AddedItmes = () => {
    const [user] = useAuthState(auth)
    const [product, setProduct] = useState(null)
    const url = `http://localhost:5000/addedProducts/${user.email}`
    const { data: addedProducts, loading, refetch } = useQuery('addedProducts', () => fetch(url).then(res => res.json()))

    if (loading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    return (
        <div className='mt-20'>
            {
                addedProducts?.map(product =>
                    <Item
                        key={product._id}
                        item={product}
                        setProduct={setProduct}
                    ></Item>
                )
            }
            {
                product && <BookingModal refetch={refetch} product={product} setProduct={setProduct}></BookingModal>
            }
            {
                product && <UpdateModal refetch={refetch}
                    product={product}
                    setProduct={setProduct}
                ></UpdateModal>
            }
        </div>
    );
};

export default AddedItmes;