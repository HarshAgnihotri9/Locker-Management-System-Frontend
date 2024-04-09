import React, { useEffect, useState } from "react";
import Comp2 from "../Comp2/Comp2";
import "./Feacher.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Feacher() {
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [done, setdone] = useState(false);
  const [arr, setarr] = useState([]);
  const [arr1, setarr1] = useState([]);
  const [arr2, setarr2] = useState([]);

  // const { dataa } = data;

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("/api/user/feacher")
        .then((res) => {
          // console.log(res.data.product1.img);
          setdata(res);
          setarr(data.data.product1);
          setarr1(data.data.product2);
          setarr2(data.data.product3);

          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    setTimeout(() => {
      fetchdata();
    }, [3000]);

    // console.log(arr);
    // console.log(arr1);
    // setdone(data.data.done);
    // console.log(done);
  });

  // useEffect(() => {
  //  fetchdata()
  // });
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Our Feachered Product</h2>
      <div className="feacher">
        {/* <Comp2 img="https://i.imgur.com/xdbHo4E.png" /> */}
        <Comp2
          img={arr.img}
          heading={arr.heading}
          heading2={arr.heading2}
          discription={arr.discription}
          price={arr.price}
        />
        <Comp2
          img={arr1.img}
          heading={arr1.heading}
          heading2={arr1.heading2}
          discription={arr1.discription}
          price={arr1.price}
        />
        <Comp2
          img={arr2.img}
          heading={arr2.heading}
          heading2={arr2.heading2}
          discription={arr2.discription}
          price={arr2.price}
        />
      </div>
      {/* <button onClick={navigate("/check")}> check pe jaoooo</button> */}
    </>
  );
}

export default Feacher;
