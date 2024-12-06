import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(600); // 10 دقیقه به ثانیه
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
        console.log("back to home page");
        
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <span className="timer-icon">⏲️</span>
        <span className="time">{formatTime(time)}</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(time / 600) * 100}%` }}
        ></div>
      </div>
      <div className="close-time" onClick={() => setIsRunning(false)}>
        بستن زمان
      </div>
    </div>
  );
};

export default Timer;
