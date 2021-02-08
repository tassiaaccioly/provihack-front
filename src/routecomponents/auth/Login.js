//dependencies
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//contexts
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/challengesApi";

//components
import TextInput from "../../components/inputs/TextInput";
import { MainBtn, LinkedinBtn, GoogleBtn } from "../../styles/buttons";
import { Form, BtnContainer } from "../../styles/forms";

export default function Login(props) {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const { ClosePopUp } = props;

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

      authContext.setHackatangaUser({ ...response.data });
      localStorage.setItem(
        "hackatangaUser",
        JSON.stringify({ ...response.data })
      );
      setError("");
      ClosePopUp();
      history.push("/challenges/bigchallenge");
    } catch (err) {
      console.log(err);
      // setError(err);
    }
  }

  return (
    <>
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
        <BtnContainer>
          <Link to="/profile/edit">Esqueceu a senha?</Link>
        </BtnContainer>
        <MainBtn style={{ width: "100%" }} type="submit">
          Log In
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
    </>
  );
}
