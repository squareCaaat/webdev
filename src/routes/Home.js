import ChallengeP from "../components/ChallengeP";
import DiaryP from "../components/DiaryP";
import Header from "../components/Header";
import Quotation from "../components/Quotation";
import TodoP from "../components/TodoP";
import styles from "./Home.module.css";

function Home(){
    return (
        <div className={styles.container}>
            <Header />
            <div className="home_section">
                <Quotation />
                <ChallengeP />
                <TodoP />
                <DiaryP />
            </div>
        </div>
    );
}

export default Home;