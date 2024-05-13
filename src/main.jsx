import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Applied_jobs from './Components/Applied_jobs/Applied_jobs';
import AddJobs from './Components/Add_a_job/AddJobs';
import Myjobs from './Components/MyJobs/Myjobs';
import Login from './Components/Login-registration/Login';
import Registration from './Components/Login-registration/Registration';
import AuthProvider from './Components/Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/Applied_jobs",
        element: <Applied_jobs></Applied_jobs>
      },
      {
        path: "/Add_jobs",
        element : <AddJobs></AddJobs>
      },
      {
        path: "/My_jobs",
        element : <Myjobs></Myjobs>
      },
      {
        path: "/All_jobs",
        element: "/Alljobs"
      },
      {
        path: "/Add_a_job",
        element: <AddJobs></AddJobs>
      },
      {
        path: "/Login",
        element : <Login></Login>
      },
      {
        path: "/Registration",
        element: <Registration></Registration>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
