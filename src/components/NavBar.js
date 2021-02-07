//dependências
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

import Login from "../routecomponents/auth/Login";
import SignUp from "../routecomponents/auth/SignUp";

//imagens
import Logo from "../assets/img/logo_hackatanga.svg";
import Profile from "../assets/icons/profile.svg";

import { Nav, Ul, ImageBtn } from "../styles/navbar";

export default function NavBar(props) {
  useContext(AuthContext);

  const { modal, setModal } = props;

  const logged = localStorage.getItem("hackatangaUser");

  const user = JSON.parse(logged || '""');

  function handleClick() {
    setModal(true);
  }

  return (
    <>
      {modal ? <SignUp modal={modal} setModal={setModal} /> : <></>}
      <Nav>
        <a href='/'>
          <img src={Logo} alt='home' />
        </a>
        <Ul>
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
                <ImageBtn onClick={handleClick}>
                  <img
                    style={{ marginRight: ".5rem" }}
                    src={Profile}
                    alt="Profile"
                  />
                  {/* {user.username} */}
                  Perfil
                </ImageBtn>
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
                <button onClick={handleClick}>SignUp</button>
              </li>{" "}
            </>
          )}
        </Ul>
      </Nav>
    </>
  );
}
