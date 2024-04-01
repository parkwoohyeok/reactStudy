import { useState } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [loveyou, setLoveyou] = useState(false);

  const wantToSeeYou = () => {
    if (!loveyou) {
      setLoveyou(true);
    } else {
      setLoveyou(false);
    }
  };

  const timeset = (e) => {
    if (!timerRunning) {
      setTime(parseInt(e.target.value));
    }
  };

  const countDown = () => {
    if (time > 0 && !timerRunning) {
      setTimerRunning(true);
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        setTimerRunning(false);
      }, time * 1000);
    }
  };

  console.log(loveyou);
  return (
    <>
      <div className={styles.goback}>
        <h1 className={styles.love}>내 마음이 식기전에 연락줘</h1>
        <button className={styles.openTimer} onClick={wantToSeeYou}>
          연락올때까지 숨 참을게
        </button>
      </div>
      <div className={`${loveyou ? styles.timer : styles.hiddenTimer}`}>
        <div>우혁이가 죽을때까지 {time} 초..♥</div>
        <button value={5} onClick={timeset}>
          헉.. 얼른 연락줘야겠다
        </button>
        <button value={60} onClick={timeset}>
          고민좀... 해봐야겠는걸...
        </button>
        <button value={9999} onClick={timeset}>
          죽어버렷
        </button>
        <div>
          <button className={styles.loveTimer} onClick={countDown}>
            사랑의 카운트 다운 시작~!
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
