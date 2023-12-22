import { FaGoogle } from "react-icons/fa"

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/dashboard')
            })
        })
    }

    return (
        <div className="p-8 text-center">
            <div className="divider lg:divider-horizontal"></div> 
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-wide">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    )
}

export default SocialLogin
