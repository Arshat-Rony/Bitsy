import React from 'react';
import Exclusives from '../Exclusives';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Connects from './Connects';
import LiveBid from './LiveBid';
import Topcollections from './Topcollections';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Banner></Banner>
            <Exclusives></Exclusives>
            <LiveBid></LiveBid>
            <Topcollections></Topcollections>
            <Connects></Connects>
        </div>
    );
};

export default Home;