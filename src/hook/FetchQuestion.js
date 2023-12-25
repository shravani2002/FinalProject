import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../database/data";

/**redux action  */
import * as Action from "../redux/question_reducer";

/**this is the fetch quesction hook to fetch api data and set value to store */
export const useFetchQuesction = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (const fetchData = async () => {
            try {
          let question = await data;

          if (question.length > 0) {
            setData((prev) => ({ ...prev, isLoading: false, apiData: question  }));

            /**dispatch an action */
            dispatch(Action.startExamAction());
          } else {
            throw new Error("No quesction available");
          }
        } catch (error) {
          setData((prev) => ({ ...prev, isLoading: false, serverError: error  }));
        }
      }
    )();
  }, [dispatch]);

  return [getData, setGetData];
};
