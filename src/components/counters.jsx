import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() { 

    const { onReset, counters, onDelete, onIncrement } = this.props;
    return ( 
      <div>
        <button 
        onClick = {onReset}
        className="btn btn-primary btn-small m-2">Reset</button>
        {counters.map((counter) => {
          return <Counter 
          key = {counter.id} 
          onDelete = {onDelete} 
          counter = {counter}
          onIncrement = {onIncrement} />
        })}
      </div>
     );
  }
}
 
export default Counters;