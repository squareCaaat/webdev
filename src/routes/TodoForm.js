import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./TodoForm.module.css";

function TodoForm(){
    return(
        <div>
            <Header />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>목표 세우기</h2>
                <div className={styles.create_wrapper}>
                    <h4 className={styles.content_title}>목표</h4>
                    <input type="text" placeholder="목표 이름" id={styles.todo_name}></input>
                    <h4 className={styles.content_title} id={styles.deadline_title}>목표 기한</h4>
                    <input type="date" id={styles.deadline}></input>
                    <h4 className={styles.content_title}>세부 설명</h4>
                    <textarea name="challenge_content" col="30" row="30" id={styles.todo_content}></textarea>
                    <br />
                    <div className={styles.btn_wrapper}>
                        <button type="button" id={styles.createbtn}>작성</button>
                        <Link to={`${process.env.PUBLIC_URL}/todos`}>
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

export default TodoForm;