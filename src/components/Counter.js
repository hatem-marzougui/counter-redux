import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from './Actions'

function Counter(props) {
    

    return (
        <div className="counter">
        <h2>Counter with Redux</h2>
        <div id="buttons">
          <button onClick={props.decrement}>-</button>
          <span className="count">{props.count}</span>
          <button onClick={props.increment}>+</button>
        </div>
      </div>
    )
}

 const mapStateToProps = state => {
    return {  count: state.count };
   };


   const mapDispatchtoProps = (dispatch) => {
    return {
      increment : () => dispatch( increment()),
      decrement : () => dispatch(decrement())
  
    };
  }
   
export default connect(mapStateToProps,mapDispatchtoProps)(Counter);