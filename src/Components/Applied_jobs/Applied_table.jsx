

const Applied_table = ({job}) => {
    const {
        jobCategory,
        Job_title,
        Salary_range,
        Job_description,
        resumeLink} = job;

    return (
        <div className="flex justify-center text-white">
            <tr>
                <td className="w-40">
                    {jobCategory}
                </td>
                <td className="w-40">
                    {Job_title}
                </td>
                <td className="w-40">
                    {Job_description}
                </td>
                <td className="w-40">{Salary_range}</td>
                <td className="w-40">{resumeLink}</td>
                
            </tr>
        </div>
    );
};

export default Applied_table;