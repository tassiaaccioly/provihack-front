import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import api from "../../apis/challengesApi";

import TextInput from "../../components/inputs/TextInput";
import { LoginBtn, LinkedinBtn, GoogleBtn } from "../../styles/buttons";

export default function Login(props) {
  const authContext = useContext(AuthContext);
  const { history } = props;

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {}, [error]);

  function handleChange(event) {
    setLogin({
      ...login,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/user/login", login);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setError("");
      history.push("/challenges");
      window.location.reload();
    } catch (err) {
      setError(err.response.data.msg);
    }
  }

  return (
    <BigContainer>
      <Form onSubmit={handleSubmit}>
        <TextInput
          autoFocus
          placeholder="email@email.com"
          type="email"
          id="loginFormEmail"
          name="email"
          label="E-mail: "
          value={login.email}
          onChange={handleChange}
        />

        <TextInput
          autoFocus
          type="password"
          placeholder="password"
          id="loginFormPassword"
          name="password"
          label="Password: "
          value={login.password}
          error={error}
          onChange={handleChange}
        />
        <div>
          <Link to="/profile/edit">Esqueceu a senha?</Link>
        </div>
        <LoginBtn type="submit">Log In</LoginBtn>
        <p>-------------- or continue with --------------</p>
        <BtnContainer>
          <LinkedinBtn type="button">Log In with Linkedin</LinkedinBtn>
          <GoogleBtn type="button">Log In with Google</GoogleBtn>
        </BtnContainer>
      </Form>
    </BigContainer>
  );
}
