import { Link } from "react-router-dom";

const Table = ({ job }) => {

    const {
        Job_title,    
        Salary_range,
        Job_posting_date,
        applicationDeadline,
        _id
} = job;

    return (
        <div>
           
                <tbody>
                    <tr className="">
                        <th className="md:w-60 p-5">{Job_title}</th>
                        <th className="md:w-60">{Job_posting_date}</th>
                        <th className="md:w-60">{applicationDeadline}</th>
                        <th className="md:w-60">{Salary_range}</th>
                        <th className="md:w-60">
                            <Link to = {`/ViewDetails/${_id}`}><button className="btn bg-orange-500 text-white font-bold hover:text-black">View Details</button></Link>
                        </th>
                    </tr>
                </tbody>
           
        </div>
    );
};

export default Table;