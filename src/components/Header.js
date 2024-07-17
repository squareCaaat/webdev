import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link to={`${process.env.PUBLIC_URL}`}>
        <span className={styles.logo}>UMOJA</span>
      </Link>
      <div className={styles.menubar}></div>
    </div>
  );
}

export default Header;
