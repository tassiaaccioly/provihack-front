import React from "react";
import styled from "styled-components";

const FormGroup = styled.div``;

const Label = styled.label``;

const Input = styled.input`
  font-size: 1.1rem;
  line-height: 2;
  width: 100%;
  border: none;
  padding: 0.5rem 1rem;
  border-bottom: ${(props) =>
    props.error ? "2px solid #2DD348" : "2px solid crimson"};
  :focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.ButtonTheme};
  }
`;

const InvalidFeedback = styled.p`
  color: rgb(241, 57, 57);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 5px auto 0;
  width: 80%;
`;

export default function TextInput(props) {
  return (
    <FormGroup>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        error={props.error || false}
      />
      {props.error ? <InvalidFeedback>{props.error}</InvalidFeedback> : null}
    </FormGroup>
  );
}
