import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const {counter, showCounter} = useSelector((state) => state);

  const incrementCounterHandler = () => {
    dispatch({type: 'increment'});
  }

  const incrementCounterByFiveHandler = () => {
    dispatch({type: 'increase', value: 5});
  }

  const decrementCounterHandler = () => {
    dispatch({type: 'decrement'});
  }

  const resetCounterHandler = () => {
    dispatch({type: ''});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={incrementCounterByFiveHandler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
        <button onClick={resetCounterHandler}>Reset Counter</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
