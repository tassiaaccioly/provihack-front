import React from "react";
import styled from "styled";

import Socials from "./Socials";

import GitHub from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;

  p {
    font-size: 1.3rem;
  }
`;

const Name = styled.h3`
  font-size: 2.3rem;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function CardAbout(props) {
  const { linkedin, name, description } = props;

  return (
    <Card>
      <Name>{name}</Name>
      <p>{description}</p>
      <SocialContainer>
        <Socials href={linkedin} src={Linkedin} alt="Linkedin" />
        {props.github ? (
          <Socials href={props.github} src={GitHub} alt="GitHub" />
        ) : (
          <></>
        )}
      </SocialContainer>
    </Card>
  );
}
