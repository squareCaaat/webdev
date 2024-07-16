import styles from "./TodoP.module.css";

function TodoP(){
    return (
        <div className={styles.preview}>
            <h4 className={styles.preview_title}>사소한 것이라도 괜찮아 너만의 길을 걸어봐!</h4>
            <ul className={styles.content_wrapper}>
                <li className={styles.item}>
                    <span className={styles.goal}>팔 굽혀 펴기 1회</span>
                    <span className={styles.cta}>결과 보러 가기</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.goal}>책 펴기</span>
                    <span className={styles.cta}>결과 보러 가기</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.goal}>물 한 모금 마시기</span>
                    <span className={styles.cta}>결과 보러 가기</span>
                </li>
            </ul>
        </div>
    );
}

export default TodoP;