import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const {counter, showCounter} = useSelector((state) => state.counter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  }

  const incrementCounterByFiveHandler = () => {
    dispatch(counterActions.increase({value: 5})); // {type: SOME_UNIQUE_IDENTIFIER, payload: {value: 5}}
  }

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  }

  const resetCounterHandler = () => {
    dispatch(counterActions.resetCounter());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
