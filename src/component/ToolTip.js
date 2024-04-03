import { useState } from "react";
import styles from "./ToolTip.module.css";
import king from "../IMG_3981.JPG";

function ToolTip() {
  const text1 = "발라드 댄스 랩/힙합 R&B/Soul 인디 락 J-POP";
  const text2 = "편식없이 먹는 사람의 추천 플레이리스트";

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>멜론이 인정한 왕</h1>
      {showTooltip && (
        <div className={styles.container}>
          <img className={styles.img} src={king} alt="나다듣왕이야" />
          <div className={styles.tooltip}>
            {text1}
            <br />
            {text2}
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolTip;
