import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetchQuesction } from "../hook/FetchQuestion";
import { storeAnswerAction } from "../redux/question_reducer";

export default function Quesctions() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [{ isLoading, apiData, serverError }] = useFetchQuesction();
  const dispatch = useDispatch();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const trace = useSelector((state) => state.questions.trace);
  const selectedAnswers = useSelector((state) => state.questions.answers);

  useEffect(() => {
    setSelectedOption(selectedAnswers[trace] || null);
  }, [trace, selectedAnswers]); // Update selectedOption when trace or selectedAnswers change

  function onSelect(e) {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    dispatch(storeAnswerAction({ index: trace, answer: selectedValue }));
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown error"}</h3>;

  return (
    <div className="quesctions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={q}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect}
              checked={selectedOption === q}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
