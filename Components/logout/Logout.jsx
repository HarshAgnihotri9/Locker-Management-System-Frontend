import React, { useEffect } from "react";
import axios from "axios";
// import useNavigate from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/user/logout");
      console.log(res);
      console.log(document.cookie);
      setTimeout(() => {
        navigate("/login");
      }, [3000]);
    })();
  });
  return <div>Logout Succesful</div>;
}

export default Logout;
