import Challenge1 from "../components/Challenge1";
import Challenge2 from "../components/Challenge2";
import Challenge3 from "../components/Challenge3";
import ChallengeC from "../components/ChallengeCreate";
import ChallengeH from "../components/ChallengeH";
import Header from "../components/Header";
import styles from "./Challenge.module.css";

function Challenges(){
    return(
        <div>
            <Header />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>챌린지</h2>
                <h3 className={styles.subtitle}>오늘 제일 핫한 챌린지</h3>
                <div className={styles.hottest}>
                    <ChallengeH />
                </div>
                <h3 className={styles.subtitle}>챌린지 모아보기</h3>
                <div className={styles.content_wrapper}>
                    <Challenge1 />
                    <Challenge2 />
                    <Challenge3 />
                </div>
                <h3 className={styles.subtitle}>원하는 챌린지가 없나요?</h3>
                <ChallengeC />
            </div>
        </div>
    );
}

export default Challenges;