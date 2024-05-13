import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toast";


const Registration = () => {


    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;
        console.log(email, password, name, photourl);

        /// password verification

        if (!/[A-Z]/.test(password)) {
            toast("Password should have one uppercase letter.")
            return
        }
        else if (!/[a-z]/.test(password)) {
            toast("password should have one lowercase letter")
            return
        }
        else if (password.length < 6) {
            toast("Password should be at least 6 letters")
            return
        }





    }


    return (
        <div className="">

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-purple-600 px-20 py-10">
                        <form className="card-body text-white font-bold" onSubmit={handleRegistration}>
                            <h1 className="text-3xl underline font-bold text-center my-5">Registration</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PhotoUrl</span>
                                </label>
                                <input type="photourl" name="photourl" placeholder="photourl" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold">Registration</button>
                            </div>

                        </form>
                        <p className="text-center text-white font-bold">Already Have an account ? Please <Link to="/Login"><button className="bg-orange-500 text-white font-bold py-2 px-3 rounded-lg">Login</button></Link></p>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default Registration;