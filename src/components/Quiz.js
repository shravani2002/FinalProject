import React , {useEffect} from "react";
import Quesctions from "./Quesctions";

/**redux store import */
import {useSelector} from 'react-redux'
export default function Quiz(){

    const state = useSelector(state => state)

    useEffect(()=>{
        console.log(state)
    })
    function onNext(){
        console.log('On next Click');
    }
    function onPrev(){
        console.log('On onPrev Click');
    }
    return(
        <div className="container">
            <h1 className="title text-light">Smart Prep</h1>
            <Quesctions/>
            <div className="grid">
                <button className="but_pre" onClick={onPrev}>Previous</button>
                <button className="but_next" onClick={onNext}>Next</button>
            </div>

        </div>
    )
}