import { useState } from "react";
import Counter from "./Counter.js";
// This is class based components
const Wrapper = () => {
  const [counter, setCounter] = useState(0);
  const [isCounter, setIsCounter] = useState(0);
  let [inputValue, setInputValue] = useState(0);

  const inputOnChange = (e) => {
    setInputValue(Number(e.target.value));
    console.log(Number(e.target.value));
  };

  const startCounter = () => {
    clearInterval(isCounter);
    const newInterval = setInterval(() => {
      setCounter((inputValue = 1 + inputValue));
    }, 1000);
    setIsCounter(newInterval);
  };

  const stopCounter = () => {
    if (isCounter) {
      clearInterval(isCounter);
    }
  };

  const deleteCounter = () => {
    clearInterval(isCounter);
    setCounter(0);
    setIsCounter(0);
  };

  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <input
        id="input"
        placeholder="Enter a number"
        type="number"
        onChange={inputOnChange}
      />
      {isCounter === 0 ? (
        <></>
      ) : (
        <div>
          <Counter counter={counter} />
        </div>
      )}

      <div className="btn">
        <button onClick={() => startCounter()}>Start</button>
        <button onClick={() => stopCounter()}>Stop</button>
        <button onClick={() => deleteCounter()}>Delete</button>
      </div>
    </div>
  );
};

export default Wrapper;
