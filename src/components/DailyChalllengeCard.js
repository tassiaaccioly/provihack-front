import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import AuthContext from "../contexts/authContext";
import api from "../apis/challengesApi";

import {
  BigContainer,
  ChallengeContainer,
  BtnContainer,
} from "../styles/challengeCards";
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
    <BigContainer>
      {challenges.map((challenge, idx) => (
        <ChallengeContainer key={idx}>
          <img src={challenge.image} alt="Company logo" />
          <h1>{challenge.name}</h1>
          <p>{challenge.description}</p>
          <BtnContainer>
            <p>{challenge.beginDate}</p>
            <Button>Participar</Button>
          </BtnContainer>
        </ChallengeContainer>
      ))}
    </BigContainer>
  );
}
