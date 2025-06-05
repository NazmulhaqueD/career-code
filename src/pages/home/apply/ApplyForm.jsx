import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const ApplyForm = () => {

    const { user } = useContext(AuthContext);
    const { id: jobId } = useParams();

    const handleApply = (e) => {
        e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;

        // application save in database of post method
        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume,
        }

        fetch(`http://localhost:5000/applications`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(application),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your apply has been successfully",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className=' w-sm mx-auto my-8'>
            <h1 className='text-center text-4xl font-bold text-teal-400 mt-8'>Apply for this job!!!</h1>
            <p className='text-center my-4'>Your job <NavLink to={`/jobDetails/${jobId}`} className='underline text-teal-600'> DETAILS</NavLink></p>
            <form onSubmit={handleApply} className="fieldset bg-base-200 border-base-300 rounded-box border p-4 space-y-4 text-sm">

                <label className="label">LinkedIn Profile link</label>
                <input type="url" className="input" name='linkedIn' placeholder="LinkedIn profile url" />

                <label className="label">GitHub link</label>
                <input type="url" className="input" name='github' placeholder="github url" />

                <label className="label">Resume Link</label>
                <input type="url" className="input" name='resume' placeholder="resume url" />

                <input type="submit" className='btn btn-primary' value="submit" />
            </form>
        </div>
    );
};

export default ApplyForm;