import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp }) => {
    const { seconds, minutes, hours, days, isRunning, start, pause, resume, } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div style={{ textAlign: 'center' }}>
            <div className='font-bold text-4xl text-red-500 my-3'>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p className='mb-4 text-2xl font-bold'>{isRunning ? 'Bid Running' : 'Bidding Over'}</p>
        </div>
    );
};

export default Timer;