import React, { useState, useEffect } from "react";

import AuthContext from "../../contexts/authContext";
import api from "../../apis/challengesApi";

export default function DailyChallenges() {
  const [challenges, setChallenges] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/challenge");

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return <></>;
}
