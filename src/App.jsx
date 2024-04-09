import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "../Components/Login/Login";
// import UserContext from "../Context/Usercontext";
import Signup from "../Components/Signup/Signup";

import UserContextProvider from "../Context/UserContextProvider";
import Home from "../Components/Home/Home";
import SignUpAdmin from "../Components/Signup Admin/SignUpAdmin";
import LoginAdmin from "../Components/LoginAdmin/LoginAdmin";
import Admin from "../Components/Adminn/Admin";
import Change from "../Components/UserDetailsChange/Change";
// import Home2 from "../Components/Home/Home2";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />

          <Route path="/login" element={<Login />} />
          <Route path="/home2" element={<Home />} />
          <Route path="/SignUpAdmin" element={<SignUpAdmin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Change" element={<Change />} />

          <Route path="/LoginAdmin" element={<LoginAdmin />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}
export default App;
