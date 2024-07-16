import styles from "./ChallengeH.module.css";

function ChallengeH(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h4 className={styles.title}>만보만 걸을까?</h4>
                <span className={styles.organizer}>개최자: 우모자</span>
            </div>
            <div className={styles.progressbar}>
                <div className={styles.progress}></div>
                <span className={styles.progress_number}>20%</span>
            </div>
            <div className={styles.detail_wrapper}>
                <span className={styles.participant}>50명 참여중</span>
                <span className={styles.compelete}>10명 완료!</span>
            </div>
        </div>
    );
}

export default ChallengeH;