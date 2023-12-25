import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../database/data";

/**redux action  */
import * as Action from "../redux/question_reducer";

/**this is the fetch quesction hook to fetch api data and set value to store */
export const useFetchQuesction = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
          let question = await data;

          if (question.length > 0) {
            setGetData((prev) => ({ ...prev, isLoading: false }));
            setGetData((prev) => ({ ...prev, apiData: question }));

            /**dispatch an action */
            dispatch(Action.startExamAction());
          } else {
            throw new Error("No quesction available");
          }
        } catch (error) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, serverError: error }));
        }
      }
    )();
  }, [dispatch]);

  return [getData, setGetData];
};
