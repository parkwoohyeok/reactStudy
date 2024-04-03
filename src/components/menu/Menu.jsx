import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Menu() {
  const menus = ["점심메뉴", "레시피", "타이머"];

  return (
    <nav className={cx("menu")}>
      {menus.map((menu, index) => (
        <div key={index}>
          {/* Link 컴포넌트의 자식 요소로 내용을 넣어줍니다. */}
          <Link to={`/${menu}`} className={cx("menuItem")}>
            {menu}
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Menu;
