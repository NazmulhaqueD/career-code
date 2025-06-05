import React, { use } from 'react';
import SingleApplication from './singleApplication';

const ApplicationsList = ({ myApplicationsPromise }) => {

    const myApplications = use(myApplicationsPromise);
    console.log(myApplications);

    return (
        <div className="overflow-x-auto">
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
                        ></SingleApplication>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationsList;