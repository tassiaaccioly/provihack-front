import styled from "styled-components";

export const LoginBtn = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.contrastText};
  border-radius: ${({theme}) => theme.borderRadius};
  border: none;
  width: 100%;
`;

export const LinkedinBtn = styled(LoginBtn)`
  background-color: #373C56;
  width: 45%;
`;

export const GoogleBtn = styled(LoginBtn)`
  background-color: #7BB4F8;
  width: 45%;
`;