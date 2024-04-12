import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";
import axios from "axios";
// import useNavigate from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const [dataa, setDataa] = useState({});
  const [err, seterr] = useState("");

  const [id, setid] = useState("");

  useEffect(() => {
    (async () => {
      const token = document.cookie.split("=")[1];
      console.log(token);
      if (token == undefined) {
        navigate("/login");
      }
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

  const handleclick = async (e) => {
    e.preventDefault();
    console.log(id);

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
        // console.log(dataa);
        seterr("plz login again ");
      })
      .catch((error) => {
        console.log(error);
        seterr("User Already exist or gmail is not acceptable");
        setTimeout(() => {
          seterr("");
        }, [5000]);
        // navigate("/login");
      });
  };
  useEffect(() => {
    if (dataa.message == "Update Done") {
      setTimeout(() => {
        navigate("/login");
      }, [5000]);
    }
  });

  return (
    <div className="container">
      <h2>Form for Details Changing</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              setpassword(e.target.value);
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
  );
}

export default RegistrationForm;
