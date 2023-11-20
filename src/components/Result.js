import React from "react";
import { Link } from 'react-router-dom';
import ResultTable from "./ResultTable";
export default function Result() {
  function onRestart() {
    console.log('on Restart')
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
      <div className="flex">
        <span>Username : </span>
        <span className="bold">Shravani</span>
        </div>

        <div className="flex">
        <span>Total Score : </span>
        <span className="bold">50</span>
        </div>

        <div className="flex">
        <span>Total Quesctions : </span>
        <span className="bold">04</span>
        </div>

        <div className="flex">
        <span>Total Attempts : </span>
        <span className="bold">03</span>
        </div>

        <div className="flex">
        <span>Total Earn Points : </span>
        <span className="bold">30</span>
        </div>

        <div className="flex">
        <span>Final Result : </span>
        <span className="bold">Passed</span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={'/'} onClick={onRestart()}>Restart</Link>
      </div>
      <div className="container">
      {/* result table */}
      <ResultTable></ResultTable>
      </div>

    </div>
  );
}
