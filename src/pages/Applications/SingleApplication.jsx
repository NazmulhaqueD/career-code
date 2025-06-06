import React from 'react';
import Swal from 'sweetalert2';

const SingleApplication = ({ application, index, myApplications, setMyApplications }) => {

    const { company, company_logo, title, _id } = application;

    const handleDeleteApply = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/applications/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {

                            const filteredApplications = myApplications.filter(application => application._id !== id);
                            setMyApplications(filteredApplications)

                            Swal.fire({
                                icon: "success",
                                title: "Your apply has been deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        }
                    })
            }
        });
    }

    return (

        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">{company}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleDeleteApply(_id)} className="btn btn-sm btn-error">Delete</button>
            </th>
        </tr>
    );
};

export default SingleApplication;