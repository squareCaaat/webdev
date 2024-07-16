import styles from "./Header.module.css";

function Header(){
    return (
        <div className={styles.header}>
            <a href="/" alt="logo" className={styles.logo}>
                <span>우모자</span>
            </a>            
            <div className={styles.menubar}>
                Menu
            </div>
        </div>
    );
}

export default Header;