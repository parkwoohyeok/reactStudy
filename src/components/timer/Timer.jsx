import styles from "./Timer.module.scss";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={cx("timer")}>
      <p className={cx("time")}>{formatTime(seconds)}</p>
      <div>
        <button onClick={toggleTimer}>{isActive ? "일시정지" : "시작"}</button>
        <button onClick={resetTimer}>재설정</button>
      </div>
    </div>
  );
}

export default Timer;
