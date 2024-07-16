import styles from "./Challenge.module.css";

function Challenge2(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h4 className={styles.title}>물은 몸에 좋아!</h4>
                <span className={styles.participant}>10명 참여중</span>
            </div>    
            <div className={styles.body}>
                <div className={styles.image}>챌린지 이미지</div>
                <span className={styles.organizer}>개최자: 우모자</span>
            </div>
        </div>
    );
}

export default Challenge2;