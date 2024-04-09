import React, { useState, useEffect } from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  // const [IsTokenExpired, setIsTokenExpired] = useState(true);
  // // const [loggedIn, setIsloggedIn] = useState(
  //   // localStorage.setItem("IsLoggedIn", false)
  // );
  // const [data, setdata] = useState(true);
  const [myValue, setMyValue] = useState(() => {
    // Get value from local storage during initialization
    const storedValue = localStorage.getItem("myValue");
    // Parse JSON if stored value exists, otherwise return default value
    return storedValue ? JSON.parse(storedValue) : true;
  });
  // useEffect(() => {
  //   // Update local storage whenever myValue changes
  //   localStorage.setItem("myValue", JSON.stringify(myValue));
  // }, [myValue]);
  useEffect(() => {
    // Update local storage whenever myValue changes
    localStorage.setItem("myValue", JSON.stringify(myValue));
  }, [myValue]);

  const [Token, setToken] = useState("");
  const [id, setid] = useState("");

  return (
    <UserContext.Provider
      value={{
        // IsTokenExpired,
        // setIsTokenExpired,
        Token,
        setToken,
        id,
        setid,
        // data,
        // setdata,
        myValue,
        setMyValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
