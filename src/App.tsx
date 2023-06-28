import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FindHospital from "./pages/FindHospital";
import SingleHospitalPage from "./pages/SingleHospital";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="findhospital" element={<FindHospital />} />
          <Route path="findhospital/:id" element={<SingleHospitalPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="errorpage" element={<ErrorPage />} />
          <Route path="navbar" element={<NavBar />} />
          <Route path="library" element={<Library />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
