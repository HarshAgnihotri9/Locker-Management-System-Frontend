import { useEffect } from "react";
// import { Axios } from "axios";
import axios from "axios";
// import { useAuth } from "../../Context/AuthProvider";
// import { AxiosProxyConfig } from "axios";

import { useState } from "react";

import UserContext from "../../Context/Usercontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setToken;
  });
  const handleAdmin = () => {
    navigate("/LoginAdmin");
  };

  const Handleclick = (e) => {
    e.preventDefault();
    // console.log(localStorage.getItem("IsLoggedIn"));

    if (username == "" || password == "") {
      seterror("plz fill all feilds");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else {
      axios
        .post("/api/user/login", {
          username: username,
          password: password,
        })
        .then(async function (response) {
          console.log(response);

          await localStorage.setItem("jwtToken", response.data.token);

          if (response.data.message == "Logged in sucessfully") {
            // await localStorage.setItem("login", false);
            navigate("/home2");
            console.log("logged in");
          } else if (response.data.message == "Password Incoorect") {
            seterror("Password Incoorect");
            navigate("/login");
          } else {
            seterror("User Details not Rightt");
            navigate("/login");
            setTimeout(() => {
              seterror("");
            }, 4000);
          }
        })
        .catch(function (error) {
          console.log(error);
          navigate("/login");
          seterror("User Details not rightt");
          setTimeout(() => {
            seterror("");
          }, 4000);
        });
    }
  };
  const handleclick2 = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div className="main">
        <div className="background">
          {/* <div className="shape"></div> */}
          {/* <div className="shape"></div> */}
        </div>
        <form onSubmit={Handleclick} style={{ height: "600px" }}>
          <h3>LoginUp Here</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="UserName"
            id="username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button type="submit">Log In</button>
          <button style={{ marginTop: "10px" }} onClick={handleclick2}>
            Signup{" "}
          </button>
          <button onClick={handleAdmin} style={{ marginTop: "10px" }}>
            {" "}
            Admin Login
          </button>
          <div className="error">
            <h2>{error}</h2>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
