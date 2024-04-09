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
      <div className="ain" style={{ display: "flex" }}>
        <div>username :{data.username}</div>
        <div>username :{data._id}</div>

        <div style={{ marginLeft: "10vw" }}>email :{data.email}</div>
        {/* <div style={{ marginLeft: "10vw" }}>email :{data.email}</div> */}
      </div>
      <div className="change">
        <button onClick={handlechange}>For Change in details Click here</button>
      </div>
      {/* <div>username :{data.ProfileDetails}</div> */}

      {/* <div> username :{data.ProfileDetails}</div> */}
      {/* <div>
        {Object.entries(data.ProfileDetails).map(([key, value]) => (
          <div key={key}>{`${key}: ${value}`}</div>
        ))}
      </div> */}
    </>
  );
}

export default Home;
