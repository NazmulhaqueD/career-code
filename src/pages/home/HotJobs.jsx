// import { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobs }) => {

    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-8 text-teal-400'>Todays Hot Jobs</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs?.map(job => <JobCard
                        key={job._id}
                        job={job}>
                    </JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;