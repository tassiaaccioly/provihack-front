import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 2rem 8rem;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 0.6rem 0;
    text-align: justify;

    strong {
      font-size: 1.5rem;
    }
  }
`;

export default function TextBox(props) {
  return <Box>{props.children}</Box>;
}
