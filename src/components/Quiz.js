import React , {useEffect} from "react";
import Quesctions from "./Quesctions";
import { MoveNextQuestion, MovePrevQuestion} from "../hook/FetchQuestion";
/**redux store import */
import {useSelector, useDispatch} from 'react-redux'
export default function Quiz(){

    // const trace = useSelector(state => state.questions.trace)
    const {queue, trace} = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(trace)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    })
    function onNext(){
        console.log('On next Click');
        if(trace < queue.length){/*UPDATE the trace value by one using move next action*/
        dispatch(MoveNextQuestion())}
        
    }
    function onPrev(){
        console.log('On onPrev Click')
        if (trace > 0) {
        dispatch(MovePrevQuestion())}
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