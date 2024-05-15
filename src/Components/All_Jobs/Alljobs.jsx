import { useLoaderData } from "react-router-dom";
import Table from "../Table";


const Alljobs = () => {
    
    const alljobs = useLoaderData();

    return (
        <div>
            <div className="">
                <table className="">
                    {/* head */}
                    <thead className="flex flex-col justify-center items-center ">
                        <tr className="mb-10">
                            <th className="w-60 underline text-2xl">Job Title</th>
                            <th className="w-60 underline text-2xl">Job Posting Date</th>
                            <th className="w-60 underline text-2xl">Application Deadline</th>
                            <th className="w-60 underline text-2xl">Salary Range</th>
                            <th className="w-60 underline text-2xl">Details</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col justify-center items-center mb-10">
                        {
                            alljobs.map(job => <Table key = {job._id} job = {job}></Table>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alljobs;