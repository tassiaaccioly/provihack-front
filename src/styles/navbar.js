import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 8rem;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 5rem;
  position: fixed;
  top: 0;

  img {
    height: 4rem;
    margin: 0;
    padding: 0;
  }
`;

export const Ul = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  li {
    text-decoration: none;
    list-style: none;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.6rem;
      font-weight: 600;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }

      :focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }

    button {
      color: ${({ theme }) => theme.colors.text};
      border: none;
      background-color: transparent;
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }

      :focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
      }
    }
  }
`;

export const ImageBtn = styled.button`
  border: none;
  background: transparent;

  img {
    height: 25px;
  }
`;
