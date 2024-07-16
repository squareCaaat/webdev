import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./DiaryForm.module.css";


function DiaryForm(){
    return(
        <div>
            <Header />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>일기 작성</h2>
                <div className={styles.create_wrapper}>
                    <h4 className={styles.content_title}>일기 이름</h4>
                    <input type="text" placeholder="챌린지 이름" id={styles.challenge_name}></input>
                
                    <h4 className={styles.content_title}>챌린지 상세</h4>
                    <textarea name="challenge_content" col="30" row="30" id={styles.challenge_content}></textarea>
                    <br />
                    <div className={styles.btn_wrapper}>
                        <button type="button" id={styles.createbtn}>작성</button>
                        <Link to={`${process.env.PUBLIC_URL}`}>
                            <button type="button" id={styles.cancelbtn}>
                                취소    
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiaryForm;