import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./DiaryForm.module.css";

function DiaryForm() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h2 className={styles.title}>하루 평가 하기</h2>
        <div className={styles.create_wrapper}>
          <h4 className={styles.content_title}>제목</h4>
          <input type="text" placeholder="제목" id={styles.diary_name}></input>
          <div className={styles.rate_wrapper}>
            <h4 className={styles.content_title} id={styles.rating_title}>평가</h4>
            <fieldset className={styles.rate}>
              <input type="radio" id="rating10" name="rating" value="10" />
              <label for="rating10" title="5점"></label>
              <input type="radio" id="rating9" name="rating" value="9" />
              <label
                className={styles.half}
                for="rating9"
                title="4.5점"
              ></label>
              <input type="radio" id="rating8" name="rating" value="8" />
              <label for="rating8" title="4점"></label>
              <input type="radio" id="rating7" name="rating" value="7" />
              <label
                className={styles.half}
                for="rating7"
                title="3.5점"
              ></label>
              <input type="radio" id="rating6" name="rating" value="6" />
              <label for="rating6" title="3점"></label>
              <input type="radio" id="rating5" name="rating" value="5" />
              <label
                className={styles.half}
                for="rating5"
                title="2.5점"
              ></label>
              <input type="radio" id="rating4" name="rating" value="4" />
              <label for="rating4" title="2점"></label>
              <input type="radio" id="rating3" name="rating" value="3" />
              <label
                className={styles.half}
                for="rating3"
                title="1.5점"
              ></label>
              <input type="radio" id="rating2" name="rating" value="2" />
              <label for="rating2" title="1점"></label>
              <input type="radio" id="rating1" name="rating" value="1" />
              <label
                className={styles.half}
                for="rating1"
                title="0.5점"
              ></label>
            </fieldset>
          </div>
          <h4 className={styles.content_title}>내용</h4>
          <textarea
            name="challenge_content"
            col="30"
            row="30"
            id={styles.diary_content}
          ></textarea>
          <div className={styles.btn_wrapper}>
            <button type="button" id={styles.createbtn}>
              작성
            </button>
            <Link to={`${process.env.PUBLIC_URL}/`}>
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
