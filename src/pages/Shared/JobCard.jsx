import React from 'react';
import { NavLink } from 'react-router';

const JobCard = ({ job }) => {
    const {_id, title, salaryRange, description, company, location, company_logo, requirements } = job
    return (
        <div className="card bg-base-100 shadow-sm border">
            <div className='flex gap-6 mt-3 items-center'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-24'
                        alt="Shoes" />
                </figure>
                <div>
                    <h1 className='text-4xl font-bold pb-2'>{company}</h1>
                    <p className='italic font-thin'>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl text-teal-400">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>SalaryRange: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p className='my-4'>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((requirement, index) => <div
                            key={index}
                            className="badge badge-outline">{requirement}</div>)
                    }
                </div>
                <NavLink to={`/jobs/${_id}`}><button className='btn w-full mt-4 btn-primary'>Apply Now</button></NavLink>
            </div>
        </div>
    );
};

export default JobCard;