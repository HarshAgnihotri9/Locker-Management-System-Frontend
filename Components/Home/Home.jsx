import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Comp1 from "../Comp1/Comp1";
import UserContext from "../../Context/Usercontext";

function Home() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      try {
        const response = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.ProfileDetails);
        setData(response.data.ProfileDetails);

        await console.log(data);
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

  return (
    <>
      <div className="ain">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Username :{" "}
          <input type="text" style={{ width: "20%" }} value={data.username} />
        </div>
        {/* <div>username :{data._id}</div> */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Email :{" "}
          <input
            type="text"
            value={data.email}
            style={{ width: "20%" }}
          ></input>
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
    </>
  );
}

export default Home;
