import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let countdown = null;

    if (timerActive) {
      countdown = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
            setTimerActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [timerActive, minutes, seconds]);

  // 타이머 시작
  const startTimer = () => {
    setTimerActive(true);
  };

  // 타이머 중지
  const stopTimer = () => {
    setTimerActive(false);
  };

  return (
    <TimerContainer>
      <TimerStyle>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </TimerStyle>
      <ButtonContainer>
        <TimerButton onClick={startTimer}>시작</TimerButton>
        <TimerButton onClick={stopTimer}>중지</TimerButton>
      </ButtonContainer>
    </TimerContainer>
  );
}

export default Timer;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 80vh;
  gap: 20px;
`;

const TimerStyle = styled.div`
  font-size: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const TimerButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #708090;
  background-color: #b0c4de;
  &:hover {
    background-color: #6495ed;
  }
`;
