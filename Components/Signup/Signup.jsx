import { useEffect, useState } from "react";
import axios from "axios";
import "./Signup.css";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, seterror] = useState("");
  // const [data, setdata] = useState({});
  // const navigate = useNavigate();
  const navigate = useNavigate();

  // useEffect(() => {});

  const handleclick2 = () => {
    // e.preventDefault();
    console.log("hi");
    navigate("/login");
  };
  const handleAdmin = () => {
    navigate("/LoginAdmin");
  };

  const handleclick = (e) => {
    e.preventDefault();
    // navigate("/app");
    console.log(Username, Email, Password);
    if (Username == "" || Password == "" || Email == "") {
      console.log("plz fill all values");
      seterror("plz fill all the valuesssss");
      setTimeout(() => {
        seterror("");
      }, 5000);
    } else {
      axios
        .post("/api/user/signup", {
          username: Username,
          email: Email,
          password: Password,
        })
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem("jwtToken", response.data.token);
          console.log(response.data);

          if (response.data.Message == "Account Creation Done") {
            navigate("/login");
          }
          if (response.data.Message == "invalid email adress") {
            seterror("invalid email adress");
            navigate("/");
            setTimeout(() => {
              seterror("");
            }, 5000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="main">
        <div className="background">
          {/* <div className="shape"></div> */}
          {/* <div className="shape"></div> */}
        </div>
        <form onSubmit={handleclick} style={{ height: "700px" }}>
          <h3>SignUp Here</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="UserName"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit">Sign up</button>
          <br />
          <button onClick={handleclick2} style={{ marginTop: "10px" }}>
            Login Here
          </button>
          <button onClick={handleAdmin} style={{ marginTop: "10px" }}>
            {" "}
            Admin Login
          </button>

          <div className="error">
            <h2>{error}</h2>
          </div>
          {/* <div className="social">
          <div className="go">
          <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
          <i className="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
        </form>
      </div>
    </>
  );
}

export default Signup;
