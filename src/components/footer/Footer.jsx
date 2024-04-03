import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <p>지인 간단 플젝 점심 메뉴 추천 사이트</p>
    </div>
  );
}

export default Footer;
