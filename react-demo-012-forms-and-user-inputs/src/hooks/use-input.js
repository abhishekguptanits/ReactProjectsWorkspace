import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //   const enteredValueIsValid = enteredValue.trim().length > 0;
  const isValid = validateInput(enteredValue);
  const hasError = !isValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  }
  

  return {
    value: enteredValue,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
