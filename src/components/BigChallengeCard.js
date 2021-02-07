import React, { useState, useEffect, useContext } from "react";

import AuthContext from "../contexts/authContext";
import api from "../apis/challengesApi";

import Button from "../components/Button/button";

export default function BigChallengeCard() {
  useContext(AuthContext);

  const [challenges, setChallenges] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/bigchallenge");

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
            <div>
              <p>{challenge.participants.length} pessoas já estão inscritas</p>
              <p>
                Limite de{" "}
                {challenge.maxParticipantsPerGroup * challenge.maxGroups}{" "}
                pessoas.
              </p>
            </div>
            <Button>Participar</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
