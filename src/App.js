import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Challenges from "./routes/Challenges";
import ChallengeForm from "./routes/ChallengeForm";
import Diaries from "./routes/Diaries";
import DiaryForm from "./routes/DiaryForm";
import Todos from "./routes/Todos";
import TodoForm from "./routes/TodoForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/challenges`} element={<Challenges />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/challenges/create`} element={<ChallengeForm />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/diaries`} element={<Diaries />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/diaries/create`} element={<DiaryForm />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/todos`} element={<Todos />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/todos/create`} element={<TodoForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
