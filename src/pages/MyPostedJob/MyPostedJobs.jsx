import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import MyPostedJobList from './MyPostedJobList';

const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);
    const [postedJobs, setPostedJobs] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPostedJobs(data)
            })
    }, [user.email])

    return (
        <div>
            <MyPostedJobList postedJobs={postedJobs}></MyPostedJobList>
        </div>
    );
};

export default MyPostedJobs;