import styled from "styled-components";

export const PopUp = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 200;
  opacity: 0.5;
`;

export const ContainerPopUp = styled.div`
  height: 65%;
  minheight: 45rem;
  background-color: rgba(255, 255, 255, 1);
  width: 70%;
  margin: 4rem 15%;
  z-index: 201;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 30px 30px 60px rgba(0, 0, 0, 0.25);
  position: absolute;
  position: fixed;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 3rem;
  top: 3rem;
  z-index: 202;
  border: none;
  background-color: transparent;
`;

export const GoBackBtn = styled.button`
  position: absolute;
  left: 3rem;
  top: 3rem;
  z-index: 202;
  border: none;
  background-color: transparent;
`;

export const SignUpImg = styled.img`
  position: absolute;
  right: -1px;
  top: -1px;
  bottom: -1px;
  height: 101%;
  z-index: 190;
`;

export const ConfirmedContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 60%;
    text-align: center;

    h1 {
      font-size: 5rem;
    }

    p {
      width: 80%;

      font-size: 1.5rem;
      margin: 1rem auto;
    }

    button {
      font-size: 1.5rem;
      width: 50%;
      padding: 1rem 0;
      margin: 1rem 2rem;
    }
  }

  img {
    width: 30%;
  }
`;

export const GroupContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0.7rem;
  padding: 1rem;

  p {
    font-size: 1.3rem;
    text-align: center;

    strong {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const GroupsContainer = styled.div`
  width: 60%;
  margin: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const H1 = styled.h1`
  font-size: 5rem;
  margin: 1rem 5rem 0 3rem;
`;

export const CompanyContainer = styled.div`
  width: 35%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.lightGray};

  img {
    width: 100%;
    margin: 2rem auto;
  }

  strong {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.4rem;
  }

  div {
    margin-top: 2rem;
  }
`;
