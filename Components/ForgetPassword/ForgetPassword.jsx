import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [err, seterr] = useState("");
  const [dataa, setDataa] = useState({});
  const navigate = useNavigate();

  const handleclick = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/user/resetpassword", {
        username: username,
        email: email,
        //   password: password,
      })
      .then((response) => {
        console.log(response);
        setDataa(response.data);
        // console.log(dataa);
        seterr("plz login again ");
        setTimeout(() => {
          navigate("/login");
        }, [5000]);
      })
      .catch((error) => {
        console.log(error);
        seterr("this email is not signup");
        setTimeout(() => {
          seterr("");
        }, [5000]);
      });
  };

  return (
    <>
      <div className="container">
        <h2>Form for Password Changing</h2>
        <form
          style={{
            backgroundColor: "white",
            height: "500px",
            marginTop: "90px",
          }}
          onSubmit={handleclick}
        >
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              name="username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Change Details" onClick={handleclick} />
          </div>
          <div style={{ color: "black" }}>{dataa.message}</div>
          <div style={{ color: "black" }}>{err}</div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
