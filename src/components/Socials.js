import React from "react";
import styled from "styled-components";

const Link = styled.a`
  border: none;
  background: transparent;
  :hover {
    border: 2px solid #f9a826;
  }
`;

const SocialImg = styled.img`
  width: auto;
  height: 4.5rem;
`;

export default function Socials(props) {
  const { src, href, alt } = props;

  return (
    <Link href={href}>
      <SocialImg src={src} alt={alt} />
    </Link>
  );
}
