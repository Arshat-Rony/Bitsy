import React from 'react';













const connects = [
    { id: 1, img: "https://i.ibb.co/J3zBCKV/collaborate-icon-1.png" },
    { id: 2, img: "https://i.ibb.co/z7wpLz3/collaborate-title-icon.png" },
    { id: 3, img: "https://i.ibb.co/2Yn5x27/collaborate-icon-3.png" },
    { id: 4, img: "https://i.ibb.co/h19GwPM/collaborate-icon-2.png" },
    { id: 5, img: "https://i.ibb.co/tBxSCk5/collaborate-icon-5.png" },
    { id: 6, img: "https://i.ibb.co/K5Lf6tV/collaborate-icon-4.png" },
    { id: 7, img: "https://i.ibb.co/fXRtmCG/collaborate-icon-6.png" },
    { id: 8, img: "https://i.ibb.co/crkQ0YC/collaborate-icon-7.png" },
    { id: 9, img: "https://i.ibb.co/LdKWkyQ/collaborate-icon-8.png" },
    { id: 10, img: "https://i.ibb.co/vB87T3s/collaborate-icon-9.png" },
    { id: 11, img: "https://i.ibb.co/9bBr4RQ/collaborate-icon-10.png" },
]

const Connects = () => {
    return (
        <div className='mt-40 font-primary px-10 lg:px-20'>
            <h2 className='text-4xl font-bold text-center'>We Collaborate With</h2>
            <div className='connect mt-12 flex flex-wrap gap-6 lg:gap-16 lg:px-32 justify-center'>
                {
                    connects.map(connect =>
                        <button className='btn btn-secondary btn-lg  shadow-md shadow-pink-400 min-w-[150px]' key={connect.id}>
                            <img src={connect.img} alt="" />
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Connects;