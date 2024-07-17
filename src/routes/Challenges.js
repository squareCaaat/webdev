import Challenge1 from "../components/Challenge1";
import Challenge2 from "../components/Challenge2";
import Challenge3 from "../components/Challenge3";
import ChallengeH from "../components/ChallengeH";
import Header from "../components/Header";
import styles from "./Challenges.module.css";
import {Link} from "react-router-dom";

function Challenges(){
    return(
        <div>
            <Header />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>챌린지</h2>
                <h3 className={styles.subtitle}>&#x1F525;오늘 제일 핫한 챌린지</h3>
                <div className={styles.hottest}>
                    <ChallengeH />
                </div>
                <h3 className={styles.subtitle}>챌린지 모아보기</h3>
                <div className={styles.content_wrapper}>
                    <Challenge1 />
                    <Challenge2 />
                    <Challenge3 />
                </div>
                <div className={styles.create_wrapper}>
                    <h3 className={styles.subtitle}>원하는 챌린지가 없나요?</h3>
                    <Link to={`${process.env.PUBLIC_URL}/challenges/create`}>
                        <button type="button" id={styles.createbtn}>
                            새로운 챌린지 만들기
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Challenges;