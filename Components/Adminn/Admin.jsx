import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [data, setdata] = useState([]);
  const [user1, setuser1] = useState([]);
  const [user2, setuser2] = useState({});
  // const [user3, setuser3] = useState({});
  // const [user4, setuser4] = useState({});
  // const [user5, setuser5] = useState({});
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/SignUpAdmin");
  };

  useEffect(() => {
    const getdata = async () => {
      const token = await localStorage.getItem("jwtToken");

      await axios
        .get("/api/Admin/userDetail", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          // setdata(res.data);
          setdata(Object.values(res.data));
          // console.log(data[1][0]);
          console.log(data);
          // setuser1(data[1][0]);
          // for(i=0;i<)
          // for(i=0;i<)

          // setuser2(data[1][1]);
          // setuser3(data[1][2]);
          // setuser4(data[1][3]);
          // setuser5(data[1][4]);
          // navigate("/Admin");
          // console.log(Object.values(data[1]));
          setuser1(Object.values(data[1]));
          console.log(user1);

          // console.log(user1);
        })
        .catch((err) => {
          console.log(err);
          if (err.message == "Request failed with status code 401") {
            navigate("/LoginAdmin");
          }
        });
    };
    getdata();
  });
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user1.map((user) => (
            <tr key={user.id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
