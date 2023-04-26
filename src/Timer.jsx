import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Timer(props) {
    const [timer, setTimer] = useState(0);
    let timerId = useRef(null); 
    let h2Ref = useRef(null); 
    let startButton = useRef(null);
    // let stopButton = useRef(null);
  
    useEffect(() => {
      if (timer === 0) {
        h2Ref.current.innerText = `Timer Value is ${timer}`;
        h2Ref.current.style.color = "black";
      } else {
        h2Ref.current.innerText = `Timer Started and Value is ${timer}`;
        h2Ref.current.style.color = "green";
      }
    });

    const startTimer = () => {
      startButton.current.disabled = true;
      timerId.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1); 
      }, 1000);
    };
  
    const stopTimer = () => {
      h2Ref.current.style.color = "red";
      startButton.current.disabled = false;
      clearInterval(timerId.current); //id = undefined
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2 id="timerid" ref={h2Ref}>
          Timer is {timer}
        </h2>
        <br />
        <button onClick={startTimer} ref={startButton}>
          Start
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={stopTimer}>Stop</button>
      </div>
    );
  }
  export default Timer