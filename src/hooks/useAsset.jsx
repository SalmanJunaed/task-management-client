import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAsset = () => {
    const axiosPublic = useAxiosPublic();
    // const [asset, setAsset] = useState([])
    // const [loading, setLoading] = useState(true);
    // useEffect(() =>{
    //     fetch('http://localhost:5000/asset')
    //     .then(res => res.json())
    //     .then(data => { setAsset(data), setLoading(false)});
    // }, [])

    const {data: asset = [], isPending: loading, refetch} = useQuery({
        queryKey: ['asset'],
        queryFn: async() => {
            const res = await axiosPublic.get('/asset');
            return res.data;
        }
    })
    return [asset, loading, refetch]
    
};

export default useAsset;
