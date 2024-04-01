import { useState } from "react";
import styles from "./ToolTip.module.css";

const ToolTip = ({ text = "보고싶어...♥" }) => {
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
      <h1>너에 대한 나의 마음이야...</h1>
      {showTooltip && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

export default ToolTip;
