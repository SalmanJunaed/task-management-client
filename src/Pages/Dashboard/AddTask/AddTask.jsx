
import { useForm } from "react-hook-form"
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";


const AddTask = () => {
    const { 
            register, 
            handleSubmit, 
            reset,
            formState: { errors }, 
        } = useForm()
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);

        // .then( result =>{

        // })
        if(data){
            const addTask = {
                title: data.title,
                description: data.description,
                date: data.date
            }
            const addTaskRes = await axiosPublic.post('/task', addTask)
            console.log(addTaskRes.data)
            if(addTaskRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Asset added',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        // console.log(data);
    };
    return (
        <div>
            <h1 className='text-2xl text-center'> Add Task </h1>
            <div className=" mx-16 min-h-screen bg-base-200">
                <div className=" flex-col">
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* Asset name input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input name="title" {...register("title", { required: true })}  type="text" placeholder="Add Task Title" className="input input-bordered"/>
                                {errors.title && <span>Asset Name field is required</span>}
                            </div>

                            {/* Task Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input name="description" className="textarea textarea-bordered h-20" {...register("description", { required: true })}  type="text" placeholder="Add Task Description"/>
                                {errors.description && <span>Asset Name field is required</span>}
                            </div>

                            {/* Date input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Dead line till</span>
                                </label>
                                <input name="date" {...register("date", { required: true })} type="text" placeholder="yyyy-mm-dd" className="input input-bordered" />
                                {errors.date && <span>quantity field is required</span>}
                            </div>


                            
                            
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Add Product
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;