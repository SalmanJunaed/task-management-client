import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const { 
        register, 
        handleSubmit,
        reset,
        formState: { errors }, 
    } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    
    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data?.name,)
            .then(() => {
                // console.log('user profile info Updated')
                // Create user entry in the database
                const userInfo = {
                    name: data.name,
                    email: data.email,
                }
                
                axiosPublic.post('users', userInfo)
                .then(res =>{
                    if (res.data.insertedId){
                        console.log('user added to the database')
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        })
                        navigate("/dashboard")
                    }
                })
                
            })
            .catch((error) => console.log(error))
        })
        
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Register to Sign Up..!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* Admin name input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" {...register("name", { required: true })}  type="text" placeholder="Your Name" className="input input-bordered"/>
                                {errors.name && <span>Name field is required</span>}
                            </div>
                            {/* Email input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span>email field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })} type="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-500">
                                            Password is required
                                        </p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-500">
                                            Password must be 6 character
                                        </p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-500">
                                            Password must be within 20 character
                                        </p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-500">
                                            Password must be one upper case, one
                                            lower case and one special character
                                        </p>
                                    )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className='text-center py-1'>
                            <small>Already have Account? Then<Link  to='/login'><span className='font-bold text-blue-600'>Login</span></Link></small>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;