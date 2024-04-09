import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <h2>This is about Page</h2>
      <button onClick={handleClick}></button>
      <div></div>
    </>
  );
}

export default About;
