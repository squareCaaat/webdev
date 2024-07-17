import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link to={`${process.env.PUBLIC_URL}`}>
        <span className={styles.logo}>우모자</span>
      </Link>
      <div className={styles.menubar}>Menu</div>
    </div>
  );
}

export default Header;
