import Counter from "./Counter.js";
import { Component } from "react";

export default class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      counterValue: 0,
      inputValue: 0,
      isCounter: false,
      intervalID: null,
      isInterval: false,
    };
  }
  inputOnChange = (e) => {
    this.setState({ inputValue: Number(e.target.value) });
    console.log(Number(e.target.value));
  };
  incrementCounterValue = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue + 1,
    }));
  };
  componentDidMount() {
    this.setState({
      counterValue: 0,
      inputValue: 0,
      isCounter: false,
      intervalID: null,
      isInterval: false,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isCounter !== this.state.isCounter && this.state.isInterval) {
      this.setState({
        intervalID: clearInterval(this.state.intervalID),
      });

      if (this.state.isCounter) {
        this.setState({
          intervalID: setInterval(this.incrementCounterValue, 1000),
        });
      }
    }
  }
  componentWillUnmount() {
    this.setState({
      intervalID: clearInterval(this.state.intervalID),
    });
  }
  startCounter() {
    this.setState({
      isCounter: true,
      isInterval: true,
      counterValue: this.state.inputValue,
      inputValue: 0,
    });
  }
  stopCounter() {
    this.setState({
      isCounter: false,
      isInterval: true,
    });
  }
  deleteCounter() {
    this.setState({
      isInterval: false,
      isCounter: false,
      counterValue: 0,
      inputValue: 0,
    });
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
        {this.state.isInterval && (
          <div>
            <Counter counterValue={this.state.counterValue} />
          </div>
        )}
        <div className="btn">
          <button onClick={() => this.startCounter()}>Start</button>
          <button onClick={() => this.stopCounter()}>Stop</button>
          <button onClick={() => this.deleteCounter()}>Delete</button>
        </div>
      </div>
    );
  }
}