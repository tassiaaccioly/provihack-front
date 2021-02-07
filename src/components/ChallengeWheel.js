import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../contexts/authContext";
import api from "../apis/challengesApi";

export default function ChallengeWheel() {
  useContext(AuthContext);

  const [challenges, setChallenges] = useState([
    {
      image: "",
      beginDate: "04-03-2021",
      description: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/challenge");

        console.log(response);

        setChallenges([...response.data]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {challenges.map((challenge, idx) => (
        <div key={idx}>
          <img src={challenge.image} alt="Challenge" />
          <h4>Daily {idx + 1}</h4>
          <p>{challenge.beginDate}</p>
          <p>{challenge.description}</p>
        </div>
      ))}
    </div>
  );
}
