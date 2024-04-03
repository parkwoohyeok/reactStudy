import { useState } from "react";
import styles from "./Timer.module.css";

function Timer() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [musicPlay, setMusicPlay] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const songs = [
    {
      name: "요즘 자주 듣는 노래 1",
      url: "https://youtu.be/xg_Y7Or_hWM?si=KtDL4aJUsBOC78bK",
      time: 5,
    },
    {
      name: "요즘 자주 듣는 노래 2",
      url: "https://youtu.be/Vc_kx2P-jJs?si=2kaTn920tJcU5e1e",
      time: 10,
    },
    {
      name: "요즘 자주 듣는 노래 3",
      url: "https://youtu.be/MSv7NbfbtU8?si=ZELF7xaQxmpapV4B",
      time: 15,
    },
  ];

  function musicPlaylist() {
    if (!musicPlay) {
      setMusicPlay(true);
    } else {
      setMusicPlay(false);
    }
  }

  const timeset = (e) => {
    if (!timerRunning) {
      const selected = songs.find((song) => song.name === e.target.textContent);
      setTime(selected.time);
      setSelectedSong(selected);
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
        window.open(selectedSong.url, "_blank");
      }, time * 1000);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.playlist}>추천 플레이리스트</h1>
        <button className={styles.openTimer} onClick={musicPlaylist}>
          확인하기
        </button>
      </div>
      <div className={`${musicPlay ? styles.timer : styles.hiddenTimer}`}>
        <div>{time} 초 후에 유튜브가 재생됩니다~! ✨</div>
        {songs.map((song) => (
          <button className={styles.btn} key={song.name} onClick={timeset}>
            {song.name}
          </button>
        ))}
        <button className={styles.timeBtn} onClick={countDown}>
          재생하기 🎶
        </button>
        <br />
      </div>
    </>
  );
}

export default Timer;
