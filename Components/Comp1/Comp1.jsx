import { useState, useEffect } from "react";
import "./Comp1.css";
// import Comp2 from "../Comp2/Comp2";
import First from "../First/First";
import Card from "../Card/Card";
import { useContext } from "react";
import UserContext from "../../Context/Usercontext";
// import axios from "axios";

function Comp1() {
  const [repp, setrepp] = useState({
    visibility: "hidden",
  });
  const [width, setwidth] = useState(window.innerWidth);
  const [flag, setflag] = useState(0);
  const [fla, setfla] = useState(0);

  var btn = document.querySelector(".right ul");

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width < 870 && flag == 0) {
      setrepp({ visibility: "hidden", display: "none" });
      setflag(1);
    }
    if (width > 870 && flag == 1) {
      setrepp({ visibility: "inherit", display: "block" });
      setflag(0);
    }
  }, [width]);

  //   useEffect(() => {
  //     if(window.innerWidth<750){
  //         setrepp({display:"flex"})
  //     }
  //   })

  function HandleClick() {
    if (width < 750 && flag == 0) {
      setrepp({ display: "none" });
      setflag(1);
    }
    if (width < 750 && flag == 1) {
      setrepp({ display: "block" });
      setflag(0);
    }
    if (width > 750 && flag == 0) {
      setrepp({ visibility: "hidden" });
      setflag(1);
    }
    if (width > 750 && flag == 1) {
      setrepp({ visibility: "inherit" });
      setflag(0);
    }
    if (flag == 1) {
      btn.style.position = "inherit";
    }
    if (flag == 0) {
      btn.style.position = "absalute";
    }
  }

  return (
    <>
      <div className="ma">
        <div className="left">
          <h3>Harshify</h3>
        </div>
        <div className="right">
          <ul style={{ position: repp.position }}>
            <li style={{ visibility: repp.visibility, display: repp.display }}>
              <a href="">Home</a>
            </li>
            <li style={{ visibility: repp.visibility, display: repp.display }}>
              <a href="">Search</a>
            </li>
            <li style={{ visibility: repp.visibility, display: repp.display }}>
              <a href="">Pricing</a>
            </li>
            <li style={{ visibility: repp.visibility, display: repp.display }}>
              <a href="">Contact</a>
            </li>
            <li style={{ visibility: repp.visibility, display: repp.display }}>
              <a href="">More</a>
            </li>

            <div className="img">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.k62ydgPhigA6J8k1R0SLGwHaEu&pid=Api&P=0&h=180"
                onClick={HandleClick}
                alt=""
              />
            </div>
          </ul>
        </div>
      </div>
      <First />
      <Card />
    </>
  );
}

export default Comp1;
