import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**custom hook */
import { useFetchQuesction } from "../hook/FetchQuestion";
import { updateResult } from "../hook/setResult";


export default function Quesctions({onChecked}) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError}] = useFetchQuesction() 

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(updateResult({ trace, checked}))
  }, [checked])
  
  function onSelect(i){
      onChecked(i)
      setChecked(i)
      dispatch(updateResult({ trace, checked}))
  }

  if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
// hello pushpak
