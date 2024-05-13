import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../../../firebase.config";


const Login = () => {
    const { signInuser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        /// Login
        signInuser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                toast(error.message)
            })

    }
    /// login google
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }



    return (
        <div className="">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-purple-500 px-5 md:p-10">
                        <form className="card-body text-white font-bold" onSubmit={handleLogin}>
                            <h1 className="text-3xl underline font-bold text-center my-5">Login now!</h1>
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
                                <button className="btn btn-primary">Login</button>
                            </div>


                        </form>
                        <div className="flex gap-5 justify-center my-5 text-center">
                            <button className="text-xl py-2 px-3 border-2 border-black rounded-lg" onClick={handleGoogleLogin}><FaGoogle /></button>
                        </div>

                        <p className="text-center text-white font-bold">New here ? Please <Link to="/Registration"><button className="bg-orange-500 text-white font-bold py-2 px-3 rounded-lg">Registration</button></Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;