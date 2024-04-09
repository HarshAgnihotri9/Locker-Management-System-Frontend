import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  NavLink,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "../Components/Signup/Signup.jsx";
// import { useNavigate } from "react-router-dom";
import Login from "../Components/Login/Login.jsx";
// import Check from "../Components/Cheak/Check.jsx";
import Comp1 from "../Components/Comp1/Comp1.jsx";
import UserContextProvider from "../Context/UserContextProvider.jsx";
// import { RedirectFunction } from "react-router-dom";
// import Home from "../Components/Home/Home.jsx";
// import Navbar from "../Components/Navbar/Navbar.jsx";
// import Check from "../Components/Cheak/Check.jsx";
// import UserContext from "../Context/Usercontext.js";
// const { loggedIn } = useContext(UserContext);
// import PrivateRoute from "./PrivateRoute.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       {/* <PrivateRoute path="/home" component={<Comp1 />} /> */}

//       <Route path="/home" element={<Comp1 />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <App />
    </React.StrictMode>
  </UserContextProvider>
);
