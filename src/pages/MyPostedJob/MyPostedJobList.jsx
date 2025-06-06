import React from 'react';
import { NavLink } from 'react-router';

const MyPostedJobList = ({ postedJobs }) => {

    console.log(postedJobs)

    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-8">Job posted by you : {postedJobs?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-bold text-teal-400'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Salary Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postedJobs?.map((post, index) => <tr key={index}>
                                {console.log(post)}
                                <th>{index + 1}</th>
                                <td>{post.title}</td>
                                <td>{post.company}</td>
                                <td><NavLink to={`/viewApplications/${post._id}`}>View Applications</NavLink></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MyPostedJobList;