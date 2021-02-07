import styled from "styled-components";

export const MainBtn = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  width: 11rem;
  height: 3.8rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  margin: 1rem auto;

  :focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const LoginBtn = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  width: 100%;
  padding: 0.3rem 1rem;

  img {
    width: 25px;
  }
`;

export const LinkedinBtn = styled(LoginBtn)`
  background-color: #373c56;
  width: 45%;
`;

export const GoogleBtn = styled(LoginBtn)`
  background-color: #7bb4f8;
  width: 45%;
`;

export const SignUpLoginBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
