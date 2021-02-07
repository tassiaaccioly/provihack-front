import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import AuthContext from "../contexts/authContext";
import api from "../apis/challengesApi";

import Button from "../components/Button/button";

export default function DailyChallengeCard() {
  useContext(AuthContext);

  const [challenges, setChallenges] = useState([{}]);

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
          <img src={challenge.image} alt="Company logo" />
          <h1>{challenge.name}</h1>
          <p>{challenge.description}</p>
          <div>
            <p>{challenge.beginDate}</p>
            <Button>Participar</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
