//dependências
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthContext from "../../contexts/authContext";

//imagens
import Logo from "../../assets/img/logo_hackatanga.svg";

export default function NavBar() {
  useContext(AuthContext);
  return (
    <nav>
      <img src={Logo} alt="Home" />
      <ul>
        <li>
          <Link to="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/partners">Parceiros</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
}
