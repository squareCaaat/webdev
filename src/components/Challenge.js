import styles from "./Challenge.module.css";

/*
    backend 연결 위한 컴포넌트
    User 인증 문제로 User 정보는 없음
    따라서 개최자와 참여자 수는 null이므로
    프론트단에서 임의로 설정
    이미지도 백엔드 단에서 구현되지 않아서 
    텍스트로 대체
*/

function Challenge({title}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.participant}>1명 참여중</span>
            </div>    
            <div className={styles.body}>
                <div className={styles.image}>챌린지 이미지</div>
                <span className={styles.organizer}>개최자: 우모자</span>
            </div>
        </div>
    );
}

export default Challenge;