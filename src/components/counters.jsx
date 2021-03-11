import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters: [
      {id:1, value:3},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0}
    ]
   };

   handleReset = () => {

   }

   handleIncrement = (counter) => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = { ...counter};
     counters[index].value++;
     this.setState({ counters });
   }

   handleDelete = (counterId) => {
    const counters = this.state.counters.filter((counter) => {
      return counter.id !== counterId
    })

    this.setState({ counters });
  }

  render() { 
    return ( 
      <div>
        <button 
        onClick = {this.handleReset}
        className="btn btn-primary btn-small m-2">Reset</button>
        {this.state.counters.map((counter) => {
          return <Counter 
          key = {counter.id} 
          onDelete = {this.handleDelete} 
          counter = {counter}
          onIncrement = {this.handleIncrement} />
        })}
      </div>
     );
  }
}
 
export default Counters;