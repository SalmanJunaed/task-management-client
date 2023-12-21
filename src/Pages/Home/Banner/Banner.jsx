import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div>
            <div className="bg-base-200">
                <div className=" max-w-max h-auto px-6 mt-2 flex flex-col md:flex-row justify-between item-center mx-8 my-8 pt-14">
                    <div className="w-full md:w-1/2 card shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <motion.img 
                        initial={{x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 4}}
                        transition={{ delay: 0.02, x:   {type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration: 1,
                        }}
                        src="https://i.ibb.co/jDFJBPG/banner-600x400.jpg" alt="" />
                    </div>
                    <div className=" w-full md:w-1/2 text-center lg:text-left">
                        <motion.h1 
                        initial={{x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 4}}
                        // viewport={{ once: true}}
                        transition={{ delay: 0.02, x:{type:"spring", stiffness: 60}, opacity:{duration:1}, ease:"easeIn", duration: 1,
                        }}
                        className="text-5xl font-bold text-blue-500">Task management application</motion.h1>
                        <motion.p
                            initial={{x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 4}}
                            viewport={{ once: true}}
                            transition={{ 
                                delay: 0.02, x:{type:"spring", stiffness: 60}, 
                                opacity:{duration: 0.6}, 
                                ease:"easeIn", 
                                duration: 1,
                            }}
                            className="py-6 text-gray-600">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </motion.p>

                        <motion.a 
                            initial={{x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 4}}
                            viewport={{ once: true}}
                            transition={{ 
                                delay: 0.02, x:{type:"spring", stiffness: 60}, 
                                opacity:{duration: 0.6}, 
                                ease:"easeIn", 
                                duration: 1,
                            }}
                        className="btn btn-outline btn-primary"> <Link to='/login'> Lets explore </Link></motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
