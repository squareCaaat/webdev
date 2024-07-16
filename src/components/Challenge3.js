import styles from "./Challenge.module.css";

function Challenge3(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h4 className={styles.title}>오늘은 내가 독서왕!</h4>
                <span className={styles.participant}>10명 참여중</span>
            </div>    
            <div className={styles.body}>
                <div className={styles.image}>챌린지 이미지</div>
                <span className={styles.organizer}>개최자: 우모자</span>
            </div>
        </div>
    );
}

export default Challenge3;