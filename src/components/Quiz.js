import React, {useEffect, useState} from "react";
import Quesctions from "./Quesctions";

import { MoveNextQuestion, MovePrevQuestion} from "../hook/FetchQuestion";
import { PushAnswer } from "../hook/setResult";

/**redux store import */
import {useSelector, useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function Quiz(){
    const[check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result)
    // const state = useSelector(state => state)

    const {queue, trace} = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(result)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    })
    function onNext(){
        console.log('On next Click');

        if(trace < queue.length){
            /*UPDATE the trace value by one using move next action*/
            dispatch(MoveNextQuestion())
            
             /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
    
    }
        
    }
    function onPrev(){
        console.log('On onPrev Click')
        if (trace > 0) {
        dispatch(MovePrevQuestion())}
    }

    function onChecked(check){
        console.log(check)
        setChecked(check)
    }

    /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }


    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
    
            {/* display questions */}
            <Quesctions onChecked={onChecked} />
    
            <div className='grid'>
                { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
      );
}