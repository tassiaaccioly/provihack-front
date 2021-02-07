import React, { useState, useEffect, useContext } from "react";

import AuthContext from "../../contexts/authContext";
import api from "../../apis/challengesApi";

import { BigContainer } from "../../styles/challengeCards";
import DailyChallengeCard from "../../components/DailyChalllengeCard";

export default function DailyChallenges() {
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
      <h1>Desafios Diários</h1>
      {challenges.map((challenge, idx) => (
        <DailyChallengeCard
          idx={idx}
          image={challenge.image}
          alt={`Challenge ${idx + 1}`}
          name={challenge.name}
          description={challenge.description}
          beginDate={challenge.beginDate}
        />
      ))}
    </BigContainer>
  );
}
