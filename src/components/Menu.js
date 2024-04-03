import styles from './menu.module.css'

const Menu = () => {
  const menus = [
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Contact us'
  ]
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        유진's react
      </div>
      <div className={styles.menuBar}>
        {menus.map((menu) => {
          const menuURL = "/" + menu.toLowerCase()
          return (
            <div className={styles.menu}>
              <a href={menuURL} className={styles.menuUrl}>{menu}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu;