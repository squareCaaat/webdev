import { Link } from "react-router-dom";
import styles from "./ChallengeC.module.css"

function ChallengeC(){
    return(
        <div className={styles.wrapper}>
            <h4 className={styles.title}>
                <Link to={`${process.env.PUBLIC_URL}/challenges/create`}>새로운 챌린지 만들기</Link>
            </h4>
        </div>
    );
}

export default ChallengeC;