import { Component } from "react";

export default class Counter extends Component {
  constructor(){
    super();
    this.state = {
      counterValue: 0,
    }
  }
  static getDerivedStateFromProps(props, state){
    return({
      counterValue: props.counterValue,
    })
  }
  render(){
     return (
    <>
      <div className="display">{this.state.counterValue}</div>
    </>
  );
  }
 
};

