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

// import React, { Component } from "react";
// import Counter from "./Counter";
// import styles from "../styles/Wrapper.module.css";
// export class Wrapper extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showCounter: true,
//       showWelcome: true,
//       startTimer: false,
//       startFrom: "",
//       counterValue: 0,
//       counterTimer: null,
//     };
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ showWelcome: false });
//     }, 2000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.startTimer !== this.state.startTimer) {
//       if (this.state.counterTimer) {
//         clearInterval(this.state.counterTimer);
//       }
//       if (this.state.startTimer) {
//         this.setState({
//           counterTimer: setInterval(this.increaseCounter, 1000),
//         });
//       }
//     }
//   }
//   increaseCounter = () => {
//     this.setState((prevState) => ({
//       counterValue: prevState.counterValue + 1,
//     }));
//   };
//   startButtonHandler = () => {
//     this.setState({
//       counterValue: Number(this.state.startFrom),
//       startTimer: true,
//       showCounter: true,
//       startFrom: "",
//     });
//   };
//   deleteButtonHandler = () => {
//     this.setState({
//       counterValue: 0,
//       startTimer: false,
//       showCounter: false,
//       startFrom: "",
//     });
//   };
//   stopButtonHandler = () => {
//     this.setState({ startTimer: false, startFrom: "" });
//   };
//   onchangeHandler = (e) => {
//     this.setState({ startFrom: Number(e.target.value) });
//   };
//   render() {
//     return (
//       <div className={styles.container}>
//         <div className={styles.box}>
//           {this.state.showWelcome ? (
//             <h1 className={styles.h1}>Welcome to Counter App</h1>
//           ) : (
//             <div className={styles.displayDiv}>
//               <h1 className={styles.h1}>Counter</h1>
//               {this.state.showCounter && (
//                 <Counter value={this.state.counterValue} />
//               )}
//               {this.state.showCounter && (
//                 <input
//                   placeholder="Enter No..."
//                   type="number"
//                   onChange={this.onchangeHandler}
//                   value={this.state.startFrom}
//                 />
//               )}
//             </div>
//           )}
//           {!this.state.showWelcome && (
//             <div className={styles.buttonDiv}>
//               <button onClick={this.startButtonHandler}>Start</button>
//               <button onClick={this.stopButtonHandler}>Stop</button>
//               <button onClick={this.deleteButtonHandler}>Delete</button>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
// export default Wrapper;
