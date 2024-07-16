import styles from "./DiaryP.module.css";

function DiaryP(){
    return (
        <div className={styles.preview}>
            <h4 className={styles.preview_title}>오늘 하루는 어땠어?</h4>
            <span className={styles.cta}>하루 평가하기</span>
        </div>
    );
}

export default DiaryP;