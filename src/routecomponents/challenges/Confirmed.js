import React from "react";

import { ConfirmedContainer } from "../../styles/modal";
import { LoginBtn } from "../../styles/buttons";

import ThumbsUp from "../../assets/icons/thumbsup.svg";

export default function Confirmed(props) {
  const { entryModal, setEntryModal, challengeId } = props;

  function ClosePopUp() {
    setEntryModal(!entryModal);
  }

  return (
    <ConfirmedContainer>
      <div>
        <h1>Sua Participação foi confirmada!</h1>
        <p>
          Enviaremos por email sua confirmação. Você também tem a opção de
          colocar na sua agenda!
        </p>
        <LoginBtn>Google Agenda</LoginBtn>
        <LoginBtn>Baixar .PDF</LoginBtn>
      </div>
      <img src={ThumbsUp} alt="Joinha" />
    </ConfirmedContainer>
  );
}
