import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./ChallengeForm.module.css";
import axios from "axios";
import {useState} from "react";
import challenge from "../components/Challenge";

function ChallengeForm(){
    // const [challengeForm, setChallengeForm] = useState({});
    // const [challenge_name, setChallenge_name] = useState("");
    // const [deadline, setDeadline] = useState("");
    // const [content, setContent] = useState("");
    //
    // const nameChange = (e) => setChallenge_name(e.target.value);
    // const deadlineChange = (e) => setDeadline(e.target.value);
    // const contentChange = (e) => setContent(e.target.value);
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     let formData = {
    //         "challenge_name": challenge_name,
    //         "progress": 0,
    //         "deadline": deadline,
    //         "content": content
    //     }
    //     console.log(formData);
    //     axios
    //         .post("http://localhost:8080/api/v1/challenges/", formData)
    //         .then((res)=>console.log(res))
    //         .catch((err)=>console.log(err));
    // }

    return(
        <div>
            <Header />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>챌린지 만들기</h2>
                <div className={styles.create_wrapper}>
                    {/*<form onSubmit={onSubmit}>*/}
                    {/*    <h4 className={styles.content_title}>챌린지명</h4>*/}
                    {/*    <input type="text" onChange={nameChange} placeholder="챌린지 이름" value={challenge_name} id={styles.challenge_name}></input>*/}
                    {/*    <h4 className={styles.content_title}>챌린지 기한</h4>*/}
                    {/*    <input type="date" onChange={deadlineChange} placeholder="챌린지 기한" value={deadline} id={styles.deadline}></input>*/}
                    {/*    <h4 className={styles.content_title}>챌린지 상세</h4>*/}
                    {/*    <textarea name="challenge_content" onChange={contentChange} value={content} id={styles.challenge_content}></textarea>*/}
                    {/*    <br/>*/}
                    {/*    <div className={styles.btn_wrapper}>*/}
                    {/*        <button type="submit" id={styles.createbtn}>작성</button>*/}
                    {/*        <Link to={`${process.env.PUBLIC_URL}/challenges`}>*/}
                    {/*            <button type="button" id={styles.cancelbtn}>*/}
                    {/*                취소*/}
                    {/*            </button>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                    <h4 className={styles.content_title}>챌린지명</h4>
                    <input type="text" placeholder="챌린지 이름" id={styles.challenge_name}></input>
                    <h4 className={styles.content_title}>챌린지 기한</h4>
                    <input type="date" placeholder="챌린지 기한" id={styles.deadline}></input>
                    <h4 className={styles.content_title}>챌린지 상세</h4>
                    <textarea name="challenge_content" id={styles.challenge_content}></textarea>
                    <br/>
                    <div className={styles.btn_wrapper}>
                        <button type="button" id={styles.createbtn}>작성</button>
                        <Link to={`${process.env.PUBLIC_URL}/challenges`}>
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

export default ChallengeForm;