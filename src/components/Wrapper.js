// This is class based components

import Counter from "./Counter.js";
import { Component } from "react";

export default class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      counterValue: 0,
      inputValue: 0,
      isCounter: false,
      intervalValue: null,
      isInterval: false,
    };
  }
  inputOnChange = (e) => {
    this.setState({inputValue: Number(e.target.value)});
    console.log(Number(e.target.value));
  };
  componentDidMount(){
    this.setState({isCounter: false})
  }
  componentDidUpdate(){
    this.setState({isCounter: true});
  }
  componentWillUnmount(){
    this.setState({isCounter: true});
  }
  startCounter () {
    this.setState({
      isInterval: true,
    })
    let counter = setInterval(()=>this.setState({counterValue: this.state.inputValue+1}), 1000);
    this.setState({
    })
    console.log(this.state.inputValue);
  }
  stopCounter() {

  }
  deleteCounter() {

  }
  render() {
    return (
      <div className="container">
        <h1 className="heading">Counter App</h1>
        <input
          id="input"
          placeholder="Enter a number"
          type="number"
          onChange={this.inputOnChange}
        />
        {/* {isCounter === 0 ? (
          <></>
        ) : (
        )} */}

          <div><Counter counterValue={this.state.counterValue} /></div>
        <div className="btn">
        <button onClick={() => this.startCounter()}>Start</button>
        <button onClick={() => this.stopCounter()}>Stop</button>
        <button onClick={() => this.deleteCounter()}>Delete</button>
        </div>
      </div>
    );
  }
}
