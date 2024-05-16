import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Table_1 from "./Table_1";

const Myjobs = () => {
    const { user } = useContext(AuthContext);
   
    const [jobs, setJobs] = useState([]);

    const [jobes, setJobes] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const url = `http://localhost:5000/jobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url]);



    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/jobs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setJobs(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <div>
                <div className="">
                    <table className="">
                        {/* head */}
                        <thead className="flex flex-col justify-center items-center ">
                            <tr className="mb-10">
                                <th className="md:w-60 underline text-xl md:text-2xl">Job Title</th>
                                <th className="md:w-60 underline text-xl md:text-2xl">Job Posting Date</th>
                                <th className="md:w-60 underline text-xl md:text-2xl">Application Deadline</th>
                                <th className="md:w-60 underline text-xl md:text-2xl">Salary Range</th>
                                <th className="md:w-60 underline text-xl md:text-2xl">Details</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col justify-center items-center mb-10">
                            {
                                jobs.map(job => <Table_1 key={job._id} job={job} handleDelete = {handleDelete}></Table_1>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myjobs;