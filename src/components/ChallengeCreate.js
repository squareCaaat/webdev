import { Link } from "react-router-dom";
import styles from "./ChallengeC.module.css"

function ChallengeC(){
    return(
        <div>
            <button type="button" id={styles.createbtn}>
                <Link to={`${process.env.PUBLIC_URL}/challenges/create`}>새로운 챌린지 만들기</Link>
            </button>
        </div>
    );
}

export default ChallengeC;