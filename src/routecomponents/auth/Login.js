import React, { useState, useContext, useEffect } from "react";

import AuthContext from "../../contexts/authContext";
import api from "../../apis/challengesApi";

export default function Login() {
  useContext(AuthContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post("/user/login");

        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return <></>;
}
