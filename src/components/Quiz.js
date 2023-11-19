import React from "react";
import Quesctions from "./Quesctions";

export default function Quiz(){
    function onNext(){
        console.log('On next Click');
    }
    function onPrev(){
        console.log('On onPrev Click');
    }
    return(
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <Quesctions/>
            <div className="grid">
                <button className="but_pre" onClick={onPrev}>Previous</button>
                <button className="but_next" onClick={onNext}>Next</button>
            </div>

        </div>
    )
}