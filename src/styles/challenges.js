import styled from "styled-components";

export const CompanyLogo = styled.div`
  width: 100vw;
  margin: 10rem 0 3rem;
  padding: 3rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 auto;
    width: 40rem;
  }
`;

export const CompanyContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const DetailsContainer = styled.div`
  width: 55%;
  padding: 1rem;
  margin-right: 5rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p,
  span,
  strong {
    font-size: 1.4rem;
    text-align: justify;
    margin: 2rem 0;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfirmContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 4rem;

  h2 {
    font-size: 3.5rem;
    margin-right: 10rem;
  }

  button {
    margin: 0;
  }
`;

export const TimeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  p,
  span,
  strong {
    font-size: 1.4rem;
    text-align: justify;
    margin: 0.5rem 0;
  }

  h3 {
    font-size: 2.2rem;
    margin-right: 3rem;
    font-weight: normal;
  }

  h4 {
    font-size: 1.5rem;
    margin-right: 3rem;
    font-weight: normal;

    strong {
      font-size: 2rem;
    }
  }

  img {
    width: 4rem;
    margin-right: 1.5rem;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1.2rem;
    text-align: justify;
    margin: 0.5rem 0;
  }
`;

export const LiveCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 0.7px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 4rem;
`;
