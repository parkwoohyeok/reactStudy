import styles from "./Nav.module.css";

const Nav = () => {
  const menus = [
    { title: "리액트야 잘지내?" },
    { title: "생각나서 연락했어" },
    { title: "자니..?" },
    { title: "자는구나..." },
    { title: "잘자" },
  ];

  return (
    <>
      <div className={styles.nav}>
        <h1>사랑한다 리액트</h1>
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
