import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const jobPromise = fetch('http://localhost:5000/jobs').then(res => res.json());

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HotJobs jobPromise={jobPromise}></HotJobs>
        </div>
    );
};

export default Home;