import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 15rem;
  width: 100vw;
  background: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ul {
    li {
      a {
        color: ${({ theme }) => theme.colors.contrastText};
      }
    }
  }
`;
