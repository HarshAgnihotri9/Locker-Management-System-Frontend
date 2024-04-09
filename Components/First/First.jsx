import React from "react";
import "./First.css";
import { useNavigate } from "react-router-dom";

function First() {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/About");
  };
  return (
    <>
      <div className="mainnn" style={{ width: "100vw" }}>
        <div className="leftt">
          <div className="heading"> Lets go</div>
          <div className="para">
            To Shopping, <br /> Online{" "}
          </div>
          <button onClick={HandleClick}>Click me</button>
        </div>
        <div className="img2">
          {/* <img src="/main.png" alt="" /> */}
          <img src="https://i.ibb.co/6mm1WHQ/girl.png" alt="girl" border="0" />
          {/* <img src="un.svg" alt="" /> */}
        </div>
        <div className="btn">
          {/* <button onClick={navigate("/check")}>click me</button> */}
        </div>
      </div>
    </>
  );
}

export default First;
