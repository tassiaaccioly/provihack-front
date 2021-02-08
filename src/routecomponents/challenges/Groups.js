import React from "react";
import groups from "../../assets/groups.json";

import { MainBtn } from "../../styles/buttons";
import { GroupContainer } from "../../styles/modal";

export default function Groups(props) {
  const { confirmModal, setConfirmModal } = props;

  function handleClick() {
    setConfirmModal(!confirmModal);
  }

  return (
    <>
      {groups.map((group, idx) => (
        <GroupContainer key={idx}>
          <p>
            Grupo <strong>{group.groupNumber}</strong>
          </p>
          <p>
            Este grupo tem <strong>{group.members.length}</strong> membros.
          </p>
          <MainBtn onClick={handleClick}>Entrar</MainBtn>
        </GroupContainer>
      ))}
    </>
  );
}
