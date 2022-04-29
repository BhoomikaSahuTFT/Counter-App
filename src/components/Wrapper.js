import { useState } from "react";
import Counter from "./Counter.js";

const Wrapper = () => {
  let [counter, setCounter] = useState();
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
    console.log(isCounter);
  };

  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <input
        id="input"
        placeholder="0"
        type="number"
        onChange={inputOnChange}
      />
      {isCounter && <Counter counter={counter} />}

      <div className="btn">
        <button onClick={() => startCounter()}>Start</button>
        <button onClick={() => stopCounter()}>Stop</button>
        <button onClick={() => deleteCounter()}>Delete</button>
      </div>
    </div>
  );
};

export default Wrapper;
