import styles from "./Tooltip.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Tooltip() {
  return <div className={cx("tooltip")}></div>;
}

export default Tooltip;
