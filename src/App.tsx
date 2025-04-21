import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CoursePage from "./pages/dashboard/Courses";
import HomePage from "./pages/dashboard/Home";
import PraticeQuestion from "./pages/dashboard/CB";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path={"/courses"} element={<CoursePage />} />
        <Route path={"/pratice-question"} element={<PraticeQuestion />} />
      </Routes>
    </Router>
  );
};

export default App;
