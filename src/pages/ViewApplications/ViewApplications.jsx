import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {

    const { _id } = useParams();
    const applications = useLoaderData();
    console.log(applications)

    const handleStatusChange = (e, id) => {
        const status = {
            status: e.target.value,
        }

        axios.patch(`http://localhost:5000/applications/${id}`, status)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h2 className="text-4xl text-center">Applications for: {_id}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{application.applicant}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                        <option disabled={true}>Updated Status</option>
                                        <option>Pending</option>
                                        <option>InterView</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;