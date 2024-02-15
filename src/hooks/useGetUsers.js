import {useEffect, useState} from "react";

export const useGetUsers= ()=>{
    const [women,setWomen]= useState([]);
    const [men,setMen]= useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users').
            then(res=>res.json())
            .then((response)=> {
                setMen(response.men);
                setWomen(response.women)
            })
    }, []);
    return {
        women,men
    }
}