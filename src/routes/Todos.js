import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Todos.module.css";
import {useState} from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>사소한 목표 세우기</h2>
          <h3 className={styles.subtitle}>기한 없이 매일 도전하는 목표!</h3>
          <ul className={styles.todo_wrapper}>
            <li className={styles.todo_item} id={styles.complete}>
              <div className={styles.item_content_wrapper}>
                <span className={styles.todo_check}>오늘 달성 여부: 완료!</span>
                <h4 className={styles.todo_name}>팔 굽혀 펴기 1회</h4>
              </div>
              <span className={styles.cta}>결과 보러가기</span>
            </li>
            <li className={styles.todo_item} id={styles.processing}>
              <div className={styles.item_content_wrapper}>
                <span className={styles.todo_check}>오늘 달성 여부: 도전중</span>
                <h4 className={styles.todo_name}>책 펴기</h4>
              </div>
              <span className={styles.cta}>결과 기록하기</span>
            </li>
            <li className={styles.todo_item} id={styles.complete}>
              <div className={styles.item_content_wrapper}>
                <span className={styles.todo_check}>오늘 달성 여부: 완료!</span>
                <h4 className={styles.todo_name}>물 한 모금 마시기</h4>
              </div>
              <span className={styles.cta}>결과 보러가기</span>
            </li>
          </ul>
          <h3 className={styles.subtitle}>실패해도 괜찮아! 조금 달려볼까?</h3>
          {todos? (
            <div className={styles.no_wrapper}>
              <span id={styles.no_content}>지금은 기한이 설정된 목표는 없어. 훌륭해!</span>
            </div>):
              (<div>list</div>)}
          <div className={styles.create_wrapper}>
            <h3 className={styles.subtitle}>원하는 목표를 세워봐!</h3>
            <Link to={`${process.env.PUBLIC_URL}/todos/create`}>
              <button type="button" id={styles.createbtn}>
                목표 만들기
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Todos;
