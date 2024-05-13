import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/All_jobs">All Jobs</NavLink></li>
        <li><NavLink to="/Applied_jobs">Applied Jobs</NavLink></li>
        <li><NavLink to="/My_jobs">My Jobs</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
        <li><NavLink to="/Register">Register</NavLink></li>
    </>
    return (
        <div className="mx-10 my-4">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div>
                                {navLink}
                            </div>
                        </ul>
                        <div className='hidden lg:flex justify-center items-center w-[200px]'>
                            <div>
                                <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" className='' />
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-purple-800'>SkillTrackers</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex lg:hidden justify-center items-center w-[200px]'>
                        <div className='flex items-center'>
                            <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" className='w-2/3' />
                            <div>
                                <p className='text-2xl font-bold text-purple-800'>SkillTrackers</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;