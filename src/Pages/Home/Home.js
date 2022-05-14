import React from 'react';
import Exclusives from '../Exclusives';
import Banner from './Banner';
import Connects from './Connects';
import LiveBid from './LiveBid';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Banner></Banner>
            <LiveBid></LiveBid>
            <Exclusives></Exclusives>
            <Connects></Connects>

        </div>
    );
};

export default Home;