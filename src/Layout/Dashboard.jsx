import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { ImProfile } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { BsFillKanbanFill } from "react-icons/bs";

const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-400"> 
                <ul className="menu p-4">
                    <li> 
                        <NavLink to="/dashboard/profile"> <ImProfile />  Profile</NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/dashboard/addTask"> <MdAddTask /> Add Task</NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/dashboard/taskBoard"> <BsFillKanbanFill /> Add Task</NavLink> 
                    </li>
                    {/* bottom section  */}
                    <ul className="divider"></ul>


                    <li>
                        <NavLink to='/' ><FaHome/>Home Page</NavLink>
                    </li>
                    <li>
                            {
                                user ? <>
                                    <span><img className="w-12 rounded-full" src={user?user.photoURL:""} alt="" /> <hr />
                                    {user.email}</span>
                                    <hr />
                                    <p className="btn btn-sm my-4" onClick={handleLogOut}>logout</p>

                                </>:<>
                                {/* // */}
                                </>
                            }
                    </li>
                </ul>
            </div>
            <div className="flex-1">
            <h1 className='text-4xl my-12 text-center'>Dashboard</h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;