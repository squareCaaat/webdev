import { Link } from "react-router-dom";
import styles from "./ChallengeP.module.css";

function ChallengeP(){
    return(
        <div className={styles.preview}>
            <h4 className={styles.preview_title}>
            <Link to={`${process.env.PUBLIC_URL}/challenges`}>참여만 해도 좋아 한 번 해볼까?</Link>
            </h4>
            <div className={styles.preview_wrapper}>
                <div className={styles.content}>
                    <span className={styles.name}>만보만 걸을까?</span>
                    <span className={styles.cta}>챌린지 보러가기</span>
                </div>
                <div className={styles.progress_wrapper}>
                    <div className={styles.progress}></div>    
                    <span className={styles.progress_number}>20%</span>
                </div>
                <div className={styles.participant_wrapper}>
                    <span className={styles.participant}>50명 참여중</span>
                    <span className={styles.complete_number}>10명 완료</span>
                </div>
            </div>
        </div>
    );
}

export default ChallengeP;