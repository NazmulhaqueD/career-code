import React, { use, useState } from 'react';
import SingleApplication from './singleApplication';

const ApplicationsList = ({ myApplicationsPromise }) => {

    const initialApplications = use(myApplicationsPromise);
    const [myApplications, setMyApplications] = useState(initialApplications)
    console.log(myApplications);

    return (
        <div className="overflow-x-auto">
            <h1 className='text-4xl text-center font-bold my-8'>Your total applications: {myApplications.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myApplications.map((application, index) => <SingleApplication
                            key={index}
                            index={index}
                            application={application}
                            myApplications={myApplications}
                            setMyApplications={setMyApplications}
                        ></SingleApplication>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationsList;