import { Link } from "react-router-dom";
import styles from "./DiaryP.module.css";

function DiaryP(){
    return (
        <div className={styles.preview}>
            <h4 className={styles.preview_title}>오늘 하루는 어땠어?</h4>
            <Link to={`${process.env.PUBLIC_URL}/diaries/create`} >
                <button type="button" className={styles.cta}>하루 평가하기</button>
            </Link>
        </div>
    );
}

export default DiaryP;