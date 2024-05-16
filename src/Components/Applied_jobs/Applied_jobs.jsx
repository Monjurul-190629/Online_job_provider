import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Applied_table from "./Applied_table";

const Applied_jobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const url = `http://localhost:5000/Applied_jobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredJobs = selectedCategory === 'All' ? jobs : jobs.filter(job => job.jobCategory.toLowerCase().trim() === selectedCategory.toLowerCase().trim());

    return (
        <div className="bg-purple-900 text-white py-10 rounded-xl">
            <h2 className="text-2xl mb-5 text-center font-bold">Your jobs: {jobs.length}</h2>
            <div className="overflow-x-auto w-full text-white">
                <label htmlFor="category" className="font-bold">Filter by Category:</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="text-black font-bold mx-3">
                    <option value="All">All</option>
                    <option value="On site">On site</option>
                    <option value="Remote">Remote</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <table className="table w-full text-white">
                    {/* head */}
                    <thead className="flex justify-center text-white">
                        <tr>
                            <th className="">Job-Category</th>
                            <th className="">Job_title</th>
                            <th className="">Job_description</th>
                            <th className="">Salary_range</th>
                            <th className="">Resume_link</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {
                            filteredJobs.map(job => <Applied_table
                                key={job._id}
                                job={job}
                            ></Applied_table>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Applied_jobs;
