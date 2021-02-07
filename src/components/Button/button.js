import React from "react";

import { MainBtn } from "../../styles/buttons";

export default function Button(props) {
  const { type, onClick, children } = props;

  return (
    <MainBtn type={type} onClick={onClick}>
      {children}
    </MainBtn>
  );
}
