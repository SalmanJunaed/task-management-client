import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-2xl text-center'> User Profile </h1>
            {
                user ? <>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={ user?user.photoURL:"" } className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold text-center">Name: {user?.displayName}</h1>
                                <p className="py-6 font-bold text-center">{user.email}</p>
                                
                            </div>
                        </div>
                    </div>
                </>:<>
                </>
            }
        </div>
    );
};

export default Profile;