import { Link } from "react-router-dom";

const Table = ({ job }) => {

    const {
        Job_title,    
        Salary_range,
        Job_posting_date,
        applicationDeadline,
} = job;

    return (
        <div>
           
                <tbody>
                    <tr className="">
                        <th className="w-60">{Job_title}</th>
                        <th className="w-60">{Job_posting_date}</th>
                        <th className="w-60">{applicationDeadline}</th>
                        <th className="w-60">{Salary_range}</th>
                        <th className="w-60">
                            <Link to = "/"><button className="btn bg-orange-500 text-white font-bold hover:text-black">View Details</button></Link>
                        </th>
                    </tr>
                </tbody>
           
        </div>
    );
};

export default Table;