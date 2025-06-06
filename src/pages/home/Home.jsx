import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const [jobs, setJobs] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [jobs])

    return (
        <div>
            <Banner></Banner>
            <HotJobs jobs={jobs}></HotJobs>
        </div>
    );
};

export default Home;