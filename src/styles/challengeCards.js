import styled from "styled-components"

export const BigContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChallengeContainer = styled.article`
  width: 70vw;
  display: flex;
  flex-direction: row;
  margin: 3rem auto;
  align-items: center;
  justify-content: space-evenly;
  border-radius: ${({theme}) => theme.borderRadius};
  border: 1px solid ${({theme}) => theme.colors.secondary};
  overflow: hidden;

  img {
    width: 30%;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.5;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.2;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;