import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LevelOneCourseList from "./components/100Level";
import { LevelTwoCourseList } from "./components/100Level";
import { LevelThreeCourseList } from "./components/100Level";
import { LevelFourCourseList } from "./components/100Level";
import { LevelFiveCourseList } from "./components/100Level";
import LevelTwo from "./layout/LevelTwoLayout";
import LevelOneLayout from "./layout/LevelOneLayout";
import LevelTwoLayout from "./layout/LevelTwoLayout";
import LevelThreeLayout from "./layout/LevelThreeLayout";
import LevelFourLayout from "./layout/LevelFourLayout";
import LevelFiveLayout from "./layout/LevelFiveLayout";
import CoursePage from "./pages/dashboard/Courses";
import HomePage from "./pages/dashboard/Home";
import FacultyList from "./layout/Faculty";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path={"/LevelOneLayout"} element={<LevelOneLayout />} />
        <Route path={"/LevelTwoLayout"} element={<LevelTwoLayout />} />
        <Route path={"/LevelThreeLayout"} element={<LevelThreeLayout />} />
        <Route path={"/LevelFourLayout"} element={<LevelFourLayout />} />
        <Route path={"/LevelFiveLayout"} element={<LevelFiveLayout />} />
        <Route path={"/100CourseList"} element={<LevelOneCourseList />} />
        <Route path={"/200CourseList"} element={<LevelTwoCourseList />} />
        <Route path={"/300CourseList"} element={<LevelThreeCourseList />} />
        <Route path={"/400CourseList"} element={<LevelFourCourseList />} />
        <Route path={"5100CourseList"} element={<LevelFiveCourseList />} />
        <Route path={"/level-two"} element={<LevelTwo />} />
        <Route path={"/courses"} element={<CoursePage />} />
        <Route path={"/faculty"} element={<FacultyList />} />
      </Routes>
    </Router>
  );
};

export default App;
