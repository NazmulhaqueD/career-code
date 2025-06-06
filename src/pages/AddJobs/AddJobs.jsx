import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const AddJobs = () => {

    const { user } = useContext(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        // process salary range
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };
        // process requirements
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
        // process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
        newJob.status = 'active';

        // jobPost save in the database of mongoDB
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added')
                }
            })
            .catch(error => {
                console.log(error);
            })

        console.log(newJob);
    }

    return (
        <div className='w-sm mx-auto'>
            <form onSubmit={handleAddJob}>
                {/* fieldset-1 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job info</legend>

                    <label className="label">Title</label>
                    <input type="text" className="input" name='title' placeholder="Job title" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="company name" />

                    <label className="label">Location</label>
                    <input type="text" className="input" name='location' placeholder="location" />

                    <label className="label">company_logo</label>
                    <input type="text" className="input" name='company_logo' placeholder="company_logo url" />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="onSite" value={'onSite'} />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value={'Remote'} />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value={'Hybrid'} />
                    </div>
                </fieldset>

                {/* fieldset-3 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Web Development</option>
                        <option>Engineer</option>
                        <option>Marketing</option>
                    </select>
                </fieldset>

                {/* applicationDeadline*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">ApplicationDeadline</legend>
                    <input type="date" name='deadline' className="input" />
                </fieldset>

                {/* salaryRange */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className='grid gap-4 grid-cols-3'>
                        <div>
                            <label className="label">Minimum salary</label>
                            <input type="text" className="input" name='min' placeholder="Minimum salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" className="input" name='max' placeholder="Maximum salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Currency" name='currency' className="select">
                                <option disabled={true}>add a currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea className="textarea" name='description' placeholder="description"></textarea>
                </fieldset>

                {/* requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="write your requirements separate by comma"></textarea>
                </fieldset>

                {/* responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="write your responsibilities separate by comma"></textarea>
                </fieldset>

                {/* hr info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" className="input" defaultValue={user?.displayName} name='hr_name' placeholder="Hr name" />

                    <label className="label">HR Email</label>
                    <input type="email" className="input" defaultValue={user?.email} name='hr_email' placeholder="Hr Email" />
                </fieldset>

                {/* salaryRange */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <input type="submit" className='btn btn-primary w-full' value="Add Job" />
                </fieldset>
            </form>
        </div>
    );
};

export default AddJobs;