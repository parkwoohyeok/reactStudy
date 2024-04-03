import styles from "./Nav.module.css";

const Nav = () => {
  const menus = [
    { title: "잡다한 거 많이 듣는" },
    { title: "유승이의" },
    { title: "오늘의" },
    { title: "선곡!" },
    { title: "🎶🎵" },
  ];

  return (
    <>
      <div className={styles.nav}>
        <h1>🎧 유승이의 플레이리스트 ✌🏻</h1>
        <div className={styles.menu}>
          {menus.map((menu) => (
            <div key={menu.title}>
              <ul className={styles.title} name={menu.title}>
                {menu.title}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
