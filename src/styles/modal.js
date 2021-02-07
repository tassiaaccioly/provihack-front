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

  section {
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 3rem;
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
  width: 60%;
  z-index: 190;
`;
