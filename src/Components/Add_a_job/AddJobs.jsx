import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




const AddJobs = () => {

    const [applicationDeadline, setApplicationDeadline] = useState(new Date());


    const [jobCategory, setJobCategory] = useState('');

    const handleCategoryChange = (event) => {
        setJobCategory(event.target.value);
    };


    return (
        <div className="">

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-purple-600 px-5 md:px-20 py-10">
                        <form className="card-body text-white font-bold" >
                            <h1 className="text-3xl underline font-bold text-center my-5">Registration</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Banner Url</span>
                                </label>
                                <input type="text" name="banner-url" placeholder="Banner url" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Job Title</span>
                                </label>
                                <input type="text" name="job-title" placeholder="Job title" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Job Category</span>
                                </label>
                                <select value={jobCategory} onChange={handleCategoryChange} className='bg-white text-black rounded-lg font-bold px-3 py-2'>
                                    <option value="">Select Job Category</option>
                                    <option value="On Site">On Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Salary range</span>
                                </label>
                                <input type="text" name="Salary-range" placeholder="salary-range" className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Job description</span>
                                </label>
                                <input type="text" name="Job-description" placeholder="job-description" className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Job Posting Date</span>
                                </label>
                                <input type="date" name="Job-posting-date" className="input input-bordered text-black" required />

                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text text-white'>Application Deadline</span>
                                </label>
                                <DatePicker className='text-black px-3 py-2 rounded-lg'
                                    selected={applicationDeadline}
                                    onChange={(date) => setApplicationDeadline(date)}
                                    minDate={new Date()} // Disable past dates
                                    dateFormat="dd-MM-yyyy" // Customize date format
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Job Applicants Number</span>
                                </label>
                                <input type="text" name="Job-application-number" placeholder="Applicants Number" defaultValue={0} className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddJobs;