//dependencies
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//contexts
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/challengesApi";

//components
import TextInput from "../../components/inputs/TextInput";
import {
  MainBtn,
  LinkedinBtn,
  GoogleBtn,
  SignUpLoginBtn,
} from "../../styles/buttons";
import { PopUp, ContainerPopUp, CloseBtn } from "../../styles/modal";
import { Form, BtnContainer } from "../../styles/forms";
import Confirmed from "./Confirmed";

//images
import Delete from "../../assets/icons/delete.svg";

export default function SignUp(props) {
  const authContext = useContext(AuthContext);
  const { history, entryModal, setEntryModal } = props;

  const [participant, setParticipant] = useState({});

  const [confirmModal, setConfirmModal] = useState(false);

  const [error, setError] = useState("");

  function ClosePopUp() {
    setEntryModal(false);
  }

  function handleChange(event) {
    setParticipant({
      ...participant,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleClick() {
    setConfirmModal(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("");

      authContext.setHackatangaUser({ ...response.data });
      localStorage.setItem(
        "hackatangauser",
        JSON.stringify({ ...response.data })
      );
      setError("");
      history.push("/bigchallenge");
      window.location.reload();
    } catch (err) {
      setError(err.response.data.msg);
    }
  }

  return (
    <>
      <PopUp onClick={ClosePopUp}></PopUp>
      <ContainerPopUp>
        {confirmModal ? (
          <Confirmed />
        ) : (
          <Form onSubmit={handleSubmit}>
            <TextInput
              autoFocus
              type="username"
              placeholder="username"
              id="loginFormUsername"
              name="username"
              label="Username: "
              value={participant.username}
              error={error}
              onChange={handleChange}
            />
            <TextInput
              autoFocus
              placeholder="email@email.com"
              type="email"
              id="loginFormEmail"
              name="email"
              label="E-mail: "
              value={participant.email}
              onChange={handleChange}
            />

            <TextInput
              autoFocus
              type="password"
              placeholder="password"
              id="loginFormPassword"
              name="password"
              label="Password: "
              value={participant.password}
              error={error}
              onChange={handleChange}
            />
            <BtnContainer>
              <SignUpLoginBtn onClick={handleClick}>
                Já tem conta? Faça Login!
              </SignUpLoginBtn>
            </BtnContainer>
            <MainBtn type="submit">Confirmar</MainBtn>
          </Form>
        )}
        <CloseBtn onClick={ClosePopUp}>
          <img width="22px" src={Delete} alt="Fechar" />
        </CloseBtn>
      </ContainerPopUp>
    </>
  );
}
