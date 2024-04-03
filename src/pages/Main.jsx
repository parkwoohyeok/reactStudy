import styles from "./Main.module.scss";

import classNames from "classnames/bind";
import Header from "../components/header/Header";
import Tooltip from "../components/tooltip/Tooltip";
import Timer from "../components/timer/Timer";
import Footer from "../components/footer/Footer";

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx("main")}>
      <Header />
      <content>
        <div className={cx("today")}>
          <h1>오늘의 메뉴</h1>
          <img src="../images/bool.png" alt="불닭볶음면" />
          <Tooltip />
        </div>
        <div>
          <p>라면 맛있게 끓이는 팁!</p>
          <Timer />
        </div>
      </content>
      <Footer />
    </div>
  );
}

export default Main;
