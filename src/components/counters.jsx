import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() { 

    const { onReset, counters, onDelete, onIncrement } = this.props;
    return ( 
      <div>
        <button 
        onClick = {this.props.onReset}
        className="btn btn-primary btn-small m-2">Reset</button>
        {this.props.counters.map((counter) => {
          return <Counter 
          key = {counter.id} 
          onDelete = {this.props.onDelete} 
          counter = {counter}
          onIncrement = {this.props.onIncrement} />
        })}
      </div>
     );
  }
}
 
export default Counters;