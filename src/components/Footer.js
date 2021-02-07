import React from "react";
import { Link } from "react-router-dom";

import { FooterContainer } from "../styles/footer";
import { Ul } from "../styles/navbar";

export default function Footer() {
  return (
    <FooterContainer>
      <Ul>
        <li>
          <Link to="/gerente">Gerente do Mês</Link>
        </li>
        <li>
          <Link to="/partners">Parceiros</Link>
        </li>
        <li>
          <Link to="/contacts">Contatos</Link>
        </li>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
      </Ul>
    </FooterContainer>
  );
}
