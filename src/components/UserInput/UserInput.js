import React, { useState } from "react";


const initialInput = {
  'current-savings':10000,
  'yearly-contribution':1000,
  'expected-return':8,
  duration: 10
} 

function UserInput(props) {
  
  const [userInput, setUserInput]=useState(initialInput);

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onCalculate(userInput);
  };
  
  const resetHandler = () => {
    setUserInput(initialInput);
  };
  
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput)=>{
      return{
        ...prevInput,
        [input]: +value,
      }
    });
  };
  


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput['current-savings']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput['duration']}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default UserInput;
