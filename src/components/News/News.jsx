import Swal from "sweetalert2";


const News = () => {
    const handleSubscribe = () =>{
        Swal({
            title: " Congratulations...!",
            text: "Subscribed Successfully",
            icon: "success",
            button: "OK!",
        });
    }
    return (
        <div className="hero min-h-[300px] bg-blue-100 mb-4">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-2xl font-bold text-center">Subscribe News Letter</h1>
                    <h1 className="text-5xl font-bold text-center">News Letter</h1>
                    <p className="py-6 text-center">
                        Be subscriber to get update of all the latest post of our solution!
                    </p>
                </div>
                <div className=" flex-1">
                    <form className="">
                        <div className="form-control inline-block">
                            <input type="email" placeholder="email address" className="input input-bordered" required />
                            <button onClick={handleSubscribe} className="btn btn-primary">Subscribe</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default News;