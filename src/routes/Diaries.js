import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Diaries.module.css";

function Diaries() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>일기</h2>
        <h3 className={styles.subtitle}>오늘은 이랬어</h3>
        <div className={styles.today_content}>
          <h4 className={styles.content_title}>재밌는 경험을 했어!</h4>
          <div className={styles.rating}>
            <span className={`${styles.star} ${styles.filled}`}>★</span>
            <span className={`${styles.star} ${styles.filled}`}>★</span>
            <span className={`${styles.star} ${styles.filled}`}>★</span>
            <span className={`${styles.star} ${styles.filled}`}>★</span>
            <span className={`${styles.star} ${styles.filled}`}>★</span>
          </div>
        </div>
        <h3 className={styles.subtitle}>너가 쌓아온 것</h3>
        <ul className={styles.content_wrapper}>
          <li className={styles.content_item}>
            <h4 className={styles.item_title}>슬픈 하루였지만 이겨냈어.</h4>
            <span className={styles.createdate}>2024-07-10</span>
            <div className={styles.rating}>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={styles.star}>★</span>
                <span className={styles.star}>★</span>
            </div>
          </li>
          <li className={styles.content_item}>
            <h4 className={styles.item_title}>아주 화가나!!</h4>
            <span className={styles.createdate}>2024-07-09</span>
            <div className={styles.rating}>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={styles.star}>★</span>
                <span className={styles.star}>★</span>
                <span className={styles.star}>★</span>
            </div>
          </li>
          <li className={styles.content_item}>
            <h4 className={styles.item_title}>즐거운 하루였어~</h4>
            <span className={styles.createdate}>2024-07-12</span>
            <div className={styles.rating}>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={`${styles.star} ${styles.filled}`}>★</span>
                <span className={styles.star}>★</span>
            </div>
          </li>
        </ul>
        <div className={styles.create_wrapper}>
            <h3 className={styles.subtitle}>일기 쓰기</h3>
            <Link to={`${process.env.PUBLIC_URL}/diaries/create`} >
                <button type="button" className={styles.cta}>하루 평가하기</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Diaries;
