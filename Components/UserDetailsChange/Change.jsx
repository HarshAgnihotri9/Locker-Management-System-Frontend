import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

// import UserContext from "../../Context/Usercontext";
function Change() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [dataa, setDataa] = useState({});
  const [err, seterr] = useState("");

  const [id, setid] = useState("");

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
        console.log(response.data.ProfileDetails._id);
        setid(response.data.ProfileDetails._id);
        // setid(data._id);

        // await console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleclick = () => {
    console.log(id);
    (async () => {
      if (username == "" && email == "" && password == "") {
        seterr("plz fill the details");
        setTimeout(() => {
          seterr("");
        }, [5000]);
      }
      await axios
        .put(`/api/user/updateProfile/${id}`, {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          setDataa(response.data);
        })
        .catch((error) => console.log(error));
    })();
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <label htmlFor="">Change Username</label>{" "}
        <input
          type="text"
          placeholder="username"
          style={{ width: "200px" }}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="">Change Email</label>{" "}
        <input
          type="text"
          placeholder="Email"
          style={{ width: "200px" }}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="">Change Password</label>{" "}
        <input
          type="text"
          placeholder="Password"
          style={{ width: "200px" }}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button style={{ width: "300px" }} onClick={handleclick}>
          {" "}
          Click to Change
        </button>
      </div>
      <div>{dataa.message}</div>
      <div>{err}</div>
    </>
  );
}

export default Change;
