import { useEffect, useState } from "react";

const useTask = () => {
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/task')
        .then(res=> res.json())
        .then(data=>{
            setTask(data);
            setLoading(false);
        })
    },[])
    return [task, loading]
};

export default useTask;