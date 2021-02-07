import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 1.5rem 0;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  margin: 0 0 8px;
  font-size: 1.4rem;
  text-align: left;
`;

const Input = styled.input`
  font-size: 1.4rem;
  line-height: 2;
  width: 100%;
  border: none;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  :focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const InvalidFeedback = styled.p`
  color: ${({ theme }) => theme.colors.invalid};
  font-size: 0.9rem;
  font-weight: 500;
  margin: 5px auto 0;
  width: 80%;
`;

export default function TextInput(props) {
  const { id, label, type, name, placeholder, value, onChange, error } = props;

  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error || false}
      />
      {error ? <InvalidFeedback>{error}</InvalidFeedback> : null}
    </FormGroup>
  );
}
