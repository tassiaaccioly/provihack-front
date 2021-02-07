import React from "react";
import styled from "styled-components";

import { ChallengeContainer, BtnContainer } from "../styles/challengeCards";
import Button from "../components/Button/button";

export default function DailyChallengeCard(props) {
  const { name, description, idx, image, beginDate } = props;

  return (
    <ChallengeContainer key={idx}>
      <img src={image} alt="Company logo" />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <BtnContainer>
          <p>{beginDate}</p>
          <Button>Participar</Button>
        </BtnContainer>
      </div>
    </ChallengeContainer>
  );
}
