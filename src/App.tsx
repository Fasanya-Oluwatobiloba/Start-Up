import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CoursePage from "./pages/dashboard/Courses";
import HomePage from "./pages/dashboard/Home";
import PraticeQuestion from "./pages/dashboard/CB";
import Market from "./pages/dashboard/Market";
import AddProduct from "./components/AddProduct";
import Announcement from "./pages/pages/Announcement";
import AddAnnouncement from "./components/AddAnnouncement";
import LostFound from "./pages/pages/Lost And Found";
import AddLostFound from "./components/AddLostFound";
import Mindshift from "./pages/pages/Mindshift";
import AddMindshift from "./components/AddMindshift";
import VideoLibrary from "./pages/dashboard/Videos";
import AddVideo from "./components/AddVideo";
import NotFound from "./pages/pages/NotFound";

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
        <Route path={"/market"} element={<Market />} />
        <Route path={"/addProduct"} element={<AddProduct />} />
        <Route path={"/announcement"} element={<Announcement />} />
        <Route path={"/addAnnouncement"} element={<AddAnnouncement />} />
        <Route path={"/lostfound"} element={<LostFound/>} />
        <Route path={"/lost"} element={<AddLostFound />} />
        <Route path={"/mindshift"} element={<Mindshift />} />
        <Route path={"/addMindshift"} element={<AddMindshift />} />
        <Route path={"/vidLib"} element={<VideoLibrary />} />
        <Route path={"/addVideo"} element={<AddVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
