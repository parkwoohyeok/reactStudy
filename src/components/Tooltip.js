import { useState } from 'react';
import styles from './tooltip.module.css'

const Tooltip = () => {
  const [opacity, setOpacity] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const zIndex = opacity ? 1000 : -1000

  const tooltipStyle = {
    zIndex: zIndex,
    opacity: +opacity,
    top: offset.y,
    left: offset.x
  }

  const handleToggle = () => {
    setOpacity(!opacity)
  }

  const handleMouseMove = (e) => {
    setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }

  return (
    <div className={styles.container}>
      <div>
        <span onMouseEnter={handleToggle} onMouseOut={handleToggle} onMouseMove={e => handleMouseMove(e)}
          className={styles.tooltipText}>여기 마우스 올려보세요</span>
      </div>

      <div style={tooltipStyle} className={styles.tooltip}>
        툴팁이다 우하하
      </div>
    </div>
  )
}

export default Tooltip;