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
import Alljobs from './Components/All_Jobs/Alljobs';
import ViewDetails from './Components/All_Jobs/ViewDetails';
import PrivateRoute from './Components/Provider/PrivateRoute';
import Update from './Components/MyJobs/Update';
import Blog from './Components/Blog/Blog';
import Not_Founded_Page from './Components/Blog/Not_Founded_Page';



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
        element: <PrivateRoute><Applied_jobs></Applied_jobs></PrivateRoute>
      },
      {
        path: "/Add_jobs",
        element : <AddJobs></AddJobs>
      },
      {
        path: "/My_jobs",
        element : <PrivateRoute><Myjobs></Myjobs></PrivateRoute>
      },
      {
        path: "/All_jobs",
        element: <Alljobs></Alljobs>,
        loader : () => fetch("http://localhost:5000/jobs")
      },
      {
        path: "ViewDetails/:id",
        element : <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader : () => fetch("http://localhost:5000/jobs")
      },
      {
        path: "/Add_a_job",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path: "/Login",
        element : <Login></Login>
      },
      {
        path: "/Registration",
        element: <Registration></Registration>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/update/:id",
        element : <Update></Update>,
        loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "Not_Founded_Page",
        element: <Not_Founded_Page></Not_Founded_Page>
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
