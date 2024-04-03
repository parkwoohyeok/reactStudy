import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Menu from "../menu/Menu";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("logo")}>맛점추</div>
      <Menu />
    </div>
  );
}

export default Header;
