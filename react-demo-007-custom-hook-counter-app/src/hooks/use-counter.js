import { useEffect, useState } from "react";

const useCounter = (inc = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + inc);
    }, 1000);

    return () => clearInterval(interval);
  }, [inc]);

  return counter;
};

export default useCounter;
