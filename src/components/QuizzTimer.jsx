import { useEffect, useState } from "react";

function QuizzTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutVariable = setTimeout(onTimeout, timeout);
    console.log("SETTING TIMEOUT");
    return () => {
      clearTimeout(timeoutVariable);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}

export default QuizzTimer;
