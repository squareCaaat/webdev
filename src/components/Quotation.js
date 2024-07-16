import styles from "./Quotation.module.css";


function Quotation(){
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.quote}>위로의 한 마디</h3>
        </div>
    );
}

export default Quotation;