import styles from "./Quotation.module.css";


function Quotation(){
    return (
        <div className={styles.wrapper}>
            <blockquote>
                <p>상상력은 지식보다 중요하다.<br/>
                    지식은 우리가 알고 있는 모든 것을 포함하고 있지만,
                    상상력은 아직 발견되지 않은 모든 것을 포함하고 있다.</p>
                <cite>알베르트 아인슈타인</cite>
            </blockquote>
        </div>
    );
}

export default Quotation;