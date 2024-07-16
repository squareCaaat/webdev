import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Challenges from "./routes/Challenges";
import ChallengeForm from "./routes/ChallengeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/challenges`} element={<Challenges />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/challenges/create`} element={<ChallengeForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
