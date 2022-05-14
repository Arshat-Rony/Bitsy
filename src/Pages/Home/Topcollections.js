import React from 'react';
import TopCollection from './TopCollection';
const data = [
    { id: 1, heading: "Ship in MoonLitNight", ethar: "1.3", owner: "Sunny Deymuz", stock: "3", img: " https://i.ibb.co/dQnjxs0/discover-img-3.png" },
    { id: 2, heading: "Ship in MoonLitNight", ethar: "1.3", owner: "Sunny Deymuz", stock: "3", img: "https://i.ibb.co/5YWn7NW/discover-img-6.png" },
    { id: 3, heading: "Ship in MoonLitNight", ethar: "1.3", owner: "Sunny Deymuz", stock: "3", img: "https://i.ibb.co/VMQXJBn/discover-img-1.png" },
]



const Topcollections = () => {
    return (
        <div className='px-10 lg:px-20 font-primary mt-40'>
            <h2 className='text-4xl font-bold '>Top Collections</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    data.map(collection => <TopCollection
                        key={collection.id}
                        collection={collection}
                    ></TopCollection>
                    )
                }
            </div>
        </div>
    );
};

export default Topcollections;