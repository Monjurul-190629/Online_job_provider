import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar";
import { useState } from "react";
import Footer from "./Home/Footer";


const Root = () => {
     // For dark light theme toggle
     const [darkMode, setDarkMode] = useState(false);

     const toggleTheme = () => {
         setDarkMode(!darkMode);
     };

    return (
        <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} ${darkMode ? 'text-white' : 'bg-black'} transition-colors duration-500 w-screen`}>
            

            <Navbar darkMode = {darkMode} toggleTheme = {toggleTheme}></Navbar>
            <Outlet></Outlet>
            <Footer darkMode = {darkMode}></Footer>

        </div>
    );
};

export default Root;