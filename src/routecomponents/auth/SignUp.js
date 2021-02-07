//dependencies
import React, { useState, useContext } from "react";

//contexts
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/pagesApi";

export default function SignUp(props) {
  useContext(AuthContext);

  const { history } = props;

  const [user, setUser] = useState({});

  return <></>;
}
