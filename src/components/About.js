import React from "react";
import styled from "styled-components";

import CardAbout from "./CardAbout";

import Logo from "../assets/img/logo_hackatanga.svg";

const Section1 = styled.section`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.5;
  }

  img {
    margin: 2rem auto;
    width: 40rem;
  }

  h4 {
    font-size: 2.2.rem;
    font-weight: 500;
  }

  p {
    font-size: 1.3rem;
  }
`;

const Section2 = styled(Section1)`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default function About() {
  return (
    <>
      <Section1>
        <h1>Sobre Nós</h1>
        <img src={Logo} alt="Logo" />
        <h4>Olá, bem vindos ao nosso projeto Hackatanga.</h4>
        <p>
          A Hackatanga é uma plataforma para pessoas em nível júnior que sentem
          dificuldade em entrar no mercado de trabalho, pois não tem experiência
          na área ou não conhecem quem os indique para as vagas.
        </p>
        <p>
          A Hackatanga permite que pessoas que se conectem para realizar
          diversos desafios propostos por nossos parceiros e ao final possam
          receber feedback dos mesmos. Além de incentivar o networking, a
          plataforma **_Hackatanga_** também ajuda no desenvolvimento de
          softskills já que os desafios em sua maioria são desenvolvidos em
          grupo, também no desenvolvimento de projetos para o portfolio do
          usuário, no desenvolvimento de experiência na área, e também a
          possibilidade de visibilidade pelas empresas parceiras e outras!
        </p>
      </Section1>
      <Section2>
        <CardAbout
          name="Tassia Accioly"
          description="Tassia é a mais nova desenvolvedora fullstack da área. Apaixonada por jogos e cinema, sonha em entrar na área de desenvolvimento de jogos um dia!"
          linkedin="https://www.linkedin.com/in/tassiaaccioly"
          github="https://github.com/tassiaaccioly"
        />
        <CardAbout
          name="Mariana Maiko"
          description="Mariana é tecnóloga mecatrônica e engenheira elétrica, e pefere comida nordestina à rodízio de sushis"
          linkedin="https://www.linkedin.com/in/mariana-maiko-tsukasaki-717336bb/"
          github="https://github.com/Marimaiko"
        />
        <CardAbout name="Juliana Felippe" description="" linkedin="" />
        <CardAbout
          name="Laura Santos"
          description="Laura é Administradora, gosta de viajar e está se aventurando no mundo tech."
          linkedin="https://www.linkedin.com/in/laurasantosdeoliveira"
        />
        <CardAbout
          name="Renata Piauí"
          description=""
          linkedin="https://www.linkedin.com/in/renata-borges-a11881110"
        />
      </Section2>
    </>
  );
}
