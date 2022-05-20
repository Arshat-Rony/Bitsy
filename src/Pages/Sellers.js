import React from 'react';
import { useQuery } from 'react-query';
import Seller from './Seller';
import Loading from './Shared/Loading';

const Sellers = () => {
    const url = `http://localhost:5000/sellers`
    const { isLoading, data: sellers } = useQuery('sellers', () =>
        fetch(url).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
            {
                sellers.map(seller =>
                    <Seller
                        key={seller._id}
                        seller={seller}
                    ></Seller>
                )
            }
        </div>
    );
};

export default Sellers;