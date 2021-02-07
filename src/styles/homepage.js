import styled from "styled-components";

export const SectionCard = styled.section`
  width: 85%;
  margin: 5rem auto;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const PartnersContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    margin-bottom: 4rem;
  }
`;

export const PartnerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Partners = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 0 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: ${({ theme }) => theme.colors.primary}; */

  img {
    width: 15rem;
  }
`;
