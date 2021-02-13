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
import { PopUp, ContainerPopUp, CloseBtn, SignUpImg } from "../../styles/modal";
import { Form, BtnContainer } from "../../styles/forms";
import Login from "./Login";

//images
import SignUpImage from "../../assets/img/signup-image.svg";
import Delete from "../../assets/icons/delete.svg";

export default function SignUp(props) {
  const authContext = useContext(AuthContext);
  const { history, modal, setModal } = props;

  const [loginModal, setLoginModal] = useState(false);

  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {}, [error]);

  function handleChange(event) {
    setSignUp({
      ...signUp,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function ClosePopUp() {
    setModal(!modal);
  }

  function handleClick() {
    setLoginModal(!loginModal);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/user/singup", signUp);

      setError("");
      history.push("/bigchallenge");
    } catch (err) {
      setError(err.response.data.msg);
    }
  }

  return (
    <>
      <PopUp onClick={ClosePopUp}></PopUp>
      <ContainerPopUp>
        {loginModal ? (
          <Login ClosePopUp={ClosePopUp} />
        ) : (
          <Form onSubmit={handleSubmit}>
            <TextInput
              autoFocus
              type="username"
              placeholder="username"
              id="loginFormUsername"
              name="username"
              label="Username: "
              value={signUp.username}
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
              value={signUp.email}
              onChange={handleChange}
            />

            <TextInput
              autoFocus
              type="password"
              placeholder="password"
              id="loginFormPassword"
              name="password"
              label="Password: "
              value={signUp.password}
              error={error}
              onChange={handleChange}
            />
            <BtnContainer>
              <SignUpLoginBtn onClick={handleClick}>
                Já tem conta? Faça Login!
              </SignUpLoginBtn>
            </BtnContainer>
            <MainBtn style={{ width: "100%" }} type="submit">
              Sign Up
            </MainBtn>
            <p style={{ margin: "1rem 0" }}>
              -------------- or continue with --------------
            </p>
            <BtnContainer>
              <LinkedinBtn type="button" disabled>
                Log In with Linkedin
              </LinkedinBtn>
              <GoogleBtn type="button" disabled>
                Log In with Google
              </GoogleBtn>
            </BtnContainer>
          </Form>
        )}
        <CloseBtn onClick={ClosePopUp}>
          <img width="22px" src={Delete} alt="Fechar" />
        </CloseBtn>
        <SignUpImg src={SignUpImage} alt="SignUp" />
      </ContainerPopUp>
    </>
  );
}
