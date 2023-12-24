import { useState } from "react"

/**this is the fetch quesction hook to fetch api data and set value to store */
export const useFetchQuiesction = () =>{
    const [getData,setData]=useState({
        Loading:false ,
        apiData:[],
        serverError : null

    })
}