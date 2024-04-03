import { useState } from 'react';
import styles from './timer.module.css'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(null)
  const [timer, setTimer] = useState(false)

  const handleStartTimer = (e) => {
    if(!timer) {
      setTimeLeft(+e.target.textContent.slice(0, 2))
      setTimer(true)

      const newTimer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
      setTimeout(() => {
        clearInterval(newTimer)
        setTimer(false)
      }, 1000 * timeLeft)
    }
  }

  return (
    <>
      <h2 className={styles.title}>Timer</h2>

      <button onClick={handleStartTimer} className={styles.button}>10seconds</button>
      <button onClick={handleStartTimer} className={styles.button}>30seconds</button>
      <button onClick={handleStartTimer} className={styles.button}>60seconds</button>

      {(timeLeft === 0) && <div className={styles.timeOut}>시간 종료 댕댕댕</div>}
      {(timeLeft === null || timeLeft !== 0) && <div></div>}
      <div className={styles.timeLeft}>남은 시간 : {timeLeft}초</div>
    </>
  )
}

export default Timer;