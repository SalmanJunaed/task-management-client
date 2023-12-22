import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import TaskBoard from "../Pages/Dashboard/TaskBoard/TaskBoard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <SignUp></SignUp>,
            },
            {
                path:'/about',
                element: <About></About>,
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        // element: <Dashboard></Dashboard>,
        children: [
            // user Route
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            },
            // {
            //     path: 'update',
            // },
            {
                path: 'taskBoard',
                element: <TaskBoard></TaskBoard>,
            },
        ]
    }
]);