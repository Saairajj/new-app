import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    value:this.props.counter.value
   }

   handleIncrement = () => {
      this.setState({ value : this.state.value + 1 });
  }

  render() { 

    var cValue = 'Zero';
    if(this.state.value === 0) {
      cValue = 'Zero'
    }else {
      cValue = this.state.value; 

    }
    return ( 
      <div>
        <button className="btn btn-primary m-2 p-2" > {cValue}</button>
        <button onClick={this.handleIncrement} className="btn btn-secondary m-2 p-2 " >Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
     );
  }
}
 
export default Counter;