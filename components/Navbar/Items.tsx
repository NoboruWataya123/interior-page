import styles from './Items.module.css'

export default function Navbar(): JSX.Element {
    return (
        <>
        <nav className={styles.nav} role="navigation">
            <div className={styles.menuToggle}>
            <input className={styles.input} type="checkbox" />
            <span className={styles.animation}></span>
            <span className={styles.animation}></span>
            <span className={styles.animation}></span>
            <div className={styles.logobox}>
                <span className={styles.logo}>This Interior</span>
            </div>
            <ul className={styles.menu}>
                <a className={styles.menuitem} href="#"><li>Home</li></a>
                <a className={styles.menuitem} href="#"><li>Collection</li></a>
                <a className={styles.menuitem} href="#"><li>About</li></a>
                <a className={styles.menuitem} href="#"><li>Contact</li></a>
            </ul>
            </div>
        </nav>
    </>
    )
}