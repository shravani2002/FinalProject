import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
export default function Main(){
    const inputRef = useRef(null)
    return(
        <div className='container-fluid' id="mainpg">
            <h1 className="title text-light">Quiz Application</h1>
            <ol>
                <li>You Will be asked 10 questions one after another</li>
                <li>10 points is awarded for the correct answer</li>
                <li>Each quesction has three options. You can choose only one options.</li>
                <li>You can review and change answer before the quiz finish</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>
            <form id='form'>
                <input ref={inputRef} type="text" placeholder="Username*"/>
            </form>
            <div className="start">
            <Link className="but" to={"quiz"}>Start Quiz</Link>

            </div>
        </div>
    )
}