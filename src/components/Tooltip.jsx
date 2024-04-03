import React, { useState } from "react";
import styled from "styled-components";

function Tooltip() {
  const [isVisible, setIsVisible] = useState(false);
  const text = "'작심삼일'도 100번만 하면 300일이 된다.";

  return (
    <TooltipContainer onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      <TooltipButton>마우스 올려보세유</TooltipButton>
      {isVisible && <TooltipText>{text}</TooltipText>}
    </TooltipContainer>
  );
}

export default Tooltip;

const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TooltipButton = styled.button`
  color: #708090;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const TooltipText = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
  background-color: #f0f8ff;
  color: #708090;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;
  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
