import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const ApplyModal = ({ job, onClose }) => {
    const { user } = useContext(AuthContext);
    const [resumeLink, setResumeLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { Banner_url,
        Job_title,
        name,
        email,
        jobCategory,
        Salary_range,
        Job_description,
        Job_posting_date,
        applicationDeadline,
        Job_applicants_number,
        _id } = job;

    const handleSubmit = async () => {
        try {
            // Check if the deadline is not over
            const currentDate = new Date();
            const deadlineDate = new Date(applicationDeadline);
            if (currentDate > deadlineDate) {
                setErrorMessage('Deadline for applying to this job has passed.');
                return;
            }



            // Submit application
            const applicationData = {
                job_id: _id,
            };


            // Close modal or show success message
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
            // Handle error
        }
    };

    return (
        <div className="mx-10 my-10 border-2 border-white rounded-lg bg-blue-950 relative">
            <div className="modal-content px-10 py-20 text-center shadow-2xl rounded-lg z-20">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='py-2 underline text-xl'>Apply for {Job_title}</h2>
                <p className='py-2 text-xl'>Logged in as: {user.displayName}</p>
                <p className='py-2 text-xl'>Email: {user.email}</p>
                <label htmlFor="resume-link" className='py-2'>Resume Link:</label>
                <input
                    type="text"
                    id="resume-link"
                    value={resumeLink}
                    className='px-1 py-1 rounded-lg mx-2 text-black'
                    onChange={(e) => setResumeLink(e.target.value)}
                />
                <button className=" py-2 px-3 mt-4 hover:bg-white rounded-lg bg-orange-500 text-white font-bold hover:text-black mx-4" onClick={handleSubmit}>Submit Application</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default ApplyModal;
