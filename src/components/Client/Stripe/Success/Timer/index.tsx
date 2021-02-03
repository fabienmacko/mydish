import React, {useState, useEffect} from 'react';
import './timer.scss';

interface TimerProps {
  setTimerFinished: any
}

const Timer = ({setTimerFinished}: TimerProps) => {

  const [seconds, setSeconds] = useState(3);

  const animationDurationSeconds = 3;

  const fullHour = new Date(seconds * 1000).toISOString().substr(11, 8);

  console.log('fullhours', fullHour);
  
  useEffect(() => {
    setTimeout(() => {
      if (seconds !== 0) {
        setSeconds(seconds - 1);
      }
      if (seconds == 1) {
        console.log('congratz');
        setTimerFinished(true);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className="timer-group">
      <div className="timer minute">
        <div className="hand"><span style={{animationDuration: `${animationDurationSeconds}s`}}></span></div>
        <div className="hand"><span style={{animationDuration: `${animationDurationSeconds}s`}}></span></div>
      </div>
      <div className="face">
        <p id="timer">{fullHour}</p>  
      </div>
    </div>
  )
}

export default Timer;