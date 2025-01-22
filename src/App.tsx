import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LevelOne from "./components/100Level";
import LevelTwo from "./layout/LevelTwoLayout";
import LevelThree from "./components/300Level";
import LevelFour from "./components/400Level";
import LevelFive from "./components/500Level";
import LevelOneLayout from "./layout/LevelOneLayout";
import LevelTwoLayout from "./layout/LevelTwoLayout";
import LevelThreeLayout from "./layout/LevelThreeLayout";
import LevelFourLayout from "./layout/LevelFourLayout";
import LevelFiveLayout from "./layout/LevelFiveLayout";
import Courses from "./pages/dashboard/Courses";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path={"/LevelOneLayout"} element={<LevelOneLayout />} />
        <Route path={"/LevelTwoLayout"} element={<LevelTwoLayout />} />
        <Route path={"/LevelThreeLayout"} element={<LevelThreeLayout />} />
        <Route path={"/LevelFourLayout"} element={<LevelFourLayout />} />
        <Route path={"/LevelFiveLayout"} element={<LevelFiveLayout />} />
        <Route path={"/level-one"} element={<LevelOne />} />
        <Route path={"/level-two"} element={<LevelTwo />} />
        <Route path={"/level-three"} element={<LevelThree />} />
        <Route path={"/level-four"} element={<LevelFour />} />
        <Route path={"/level-five"} element={<LevelFive />} />
        <Route path={"/courses"} element={<Courses />} />
      </Routes>
    </Router>
  );
};

export default App;
