import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Comp1 from "../Comp1/Comp1";
// import UserContext from "../../Context/Usercontext";
import "./Home.css";

function Home() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = document.cookie.split("=")[1];
      if (token == undefined) {
        navigate("/login");
      }
      console.log(token);
      try {
        const response = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.ProfileDetails);
        // console.log(document.cookie.split("=")[1]);
        console.log(localStorage.getItem("jwtToken"));
        setData(response.data.ProfileDetails);

        // await console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handlechange = () => {
    // setid(data.id);
    // localStorage.setItem("id", data.id);
    // setid();
    // console.log(id);
    navigate("/Change");
  };
  const handlelogout = () => {
    navigate("/logout");
  };

  return (
    <>
      <div className="home">
        <div className="ain">
          <h2 style={{ textAlign: "center" }}> User Details</h2>
          <div>
            Username : <input type="text" id="input" value={data.username} />
          </div>
          {/* <div>username :{data._id}</div> */}

          <div>
            Email : <input type="text" id="input" value={data.email}></input>
          </div>
          {/* <div style={{ marginLeft: "10vw" }}>email :{data.email}</div> */}
        </div>
        <div
          className="change"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={handlechange}
            style={{ width: "200px", marginLeft: "0%" }}
          >
            For Change in details Click here
          </button>
        </div>
        <div
          className="change"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ width: "200px", marginLeft: "0%" }}
            onClick={handlelogout}
          >
            {" "}
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
