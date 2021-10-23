import "./styles.css";
import { useState } from "react";

function calculateGrade(percentage) {
  /*
   * Write your code here
   * > 90 is an A
   * 80-89 is a B
   * 70-79 is a C
   * 65-69 is a D
   * < 65 is a F which is resonable
   */
}

/*
 * Don't edit anything below here!
 */

export default function App() {
  const [grade, setGrade] = useState();
  const [letterGrade, setLetterGrade] = useState("");
  function gradeChange(event) {
    setGrade(event.target.value);
  }
  function clickHandler() {
    let newLetterGrade = calculateGrade(grade);
    setLetterGrade(newLetterGrade);
  }
  return (
    <div className="App">
      <h2>📝 Grade Calculator 📓</h2>
      <label>Enter your final grade: </label>
      <input type="number" onChange={gradeChange} />
      <br />
      <button className="button" onClick={clickHandler}>
        Calculate
      </button>
      <br />
      Your letter grade is:
      <h1>{letterGrade}</h1>
    </div>
  );
}
