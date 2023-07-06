import { useEffect, useState } from "react";
import { getSpecies } from "../utils/api";

const useDetails=(id)=>{
    const [loading, setLoading]=useState(true);
    const [color, setColor]= useState('');
    const getData=async()=>{
        const result = await getSpecies(id);
        setColor(result.color);
        setLoading(false)
    }
    useEffect(()=>{
        getData();
    },[])
    return{
        loading,
        color
    }
}
export default useDetails;
