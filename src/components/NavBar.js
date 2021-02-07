//dependências
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthContext from "../contexts/authContext";

//imagens
import Logo from "../assets/img/logo_hackatanga.svg";
import Profile from "../assets/icons/profile.svg";

export default function NavBar() {
  useContext(AuthContext);

  const logged = localStorage.getItem("loggedInUser");

  const user = JSON.parse(logged || '""');

  return (
    <nav>
      <img src={Logo} alt="Home" />
      <ul>
        {logged ? (
          <>
            <li>
              <Link to={`/challenges/${user._id}`}>Participando</Link>
            </li>
            <li>
              <Link to="/challenges/daily">Desafios Diários</Link>
            </li>
            <li>
              <Link to="/challenges/feedbacks">Feedbacks</Link>
            </li>
            <li>
              <Link to="/auth/profile">
                <img height="35px" src={Profile} alt="Profile" />
                {user.username}
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/about">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/search">Pesquise um Júnior</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>{" "}
          </>
        )}
      </ul>
    </nav>
  );
}
