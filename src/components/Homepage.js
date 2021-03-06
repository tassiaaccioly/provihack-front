//dependências
import React from "react";

//imagens
import oquefazemos from "../assets/img/parceiros.svg";
import cardGerentes from "../assets/img/cardGerentes.svg";
import cadastro from "../assets/img/cadastro.svg";

//componentes
import {
  SectionCard,
  TextBoxContainer,
  PartnersContainer,
  Partners,
  PartnerBox,
} from "../styles/homepage";
import ImageBox from "./imageBox/imageBox";
import TextBox from "./TextBox";
import Button from "./Button/Button";

//imagens
import BurgerKing from "../assets/img/burgerking.png";
import Provi from "../assets/img/provi.png";
import Boticario from "../assets/img/boticario.png";
import Stone from "../assets/img/stone.png";

export default function Homepage(props) {
  const { modal, setModal } = props;

  function handleClick() {
    setModal(true);
  }

  return (
    <>
      <SectionCard>
        <TextBoxContainer>
          <TextBox>
            <h1>O que Fazemos</h1>
            <p>
              Somos um banco de dados de profissionais em início de carreira.
            </p>
            <p>
              <strong>Como?</strong> Aqui formamos grupos para resolver cases de
              empresas parceiras.
            </p>
            <p>
              <strong>Por quê?</strong> Queremos que as empresas vejam sua
              performance em um caso real, mesmo que você ainda não esteja
              trabalhando. Apostamos em um portfólio mais diverso de
              experiências!
            </p>
          </TextBox>
          <Button>Saiba mais</Button>
        </TextBoxContainer>
        <ImageBox
          src={oquefazemos}
          alt="Duas pessoas de pé procurando arquivos"
        />
      </SectionCard>

      <SectionCard>
        <ImageBox
          src={cardGerentes}
          alt="Duas cartas de baralho com pessoas coroadas"
        />
        <TextBoxContainer>
          <TextBox>
            <h1 style={{ textAlign: "right" }}>Desafio Provi</h1>
            <p style={{ textAlign: "right" }}>
              O Hackatanga do mês é com nosso parceiro <strong>Provi</strong>.
              Viver essa experiência em grupo vai te ajudar na sua performance
              como júnior!
            </p>
            <p style={{ textAlign: "right" }}>
              E sabe o melhor? Nossos parceiros podem usar nossa plafatormas pra
              pesquisar candidatos, também, porque aqui vai ficar arquivado todo
              o processo que você e seu time fizer.
            </p>
          </TextBox>
          <Button onClick={handleClick}>Participar</Button>
        </TextBoxContainer>
      </SectionCard>

      <SectionCard>
        <TextBoxContainer>
          <TextBox title="Cadastro">
            <h1>Cadastro</h1>
            <p>
              <strong>Sou uma empresa</strong>
            </p>
            <p>
              Vamos ser parceiros e promover desafios para juniores cadastrados.
              Pesque algumas mentes brilhantes no nosso repositório!
            </p>
            <p>
              <strong>Sou um júnior</strong>
            </p>
            <p>
              Ponha seus dados uma única vez e venha curtir um hackatanga com
              outros júniores, aumentar seu portfolio, ganhar feedbacks e fazer
              networking!
            </p>
          </TextBox>
          <Button>Cadastrar</Button>
        </TextBoxContainer>
        <ImageBox src={cadastro} alt="Uma garota sentada com papel na mão" />
      </SectionCard>
      <PartnersContainer>
        <h1>Nossos Parceiros</h1>
        <PartnerBox>
          <Partners>
            <img src={Provi} alt="Provi" />
          </Partners>
          <Partners>
            <img src={BurgerKing} alt="Burger King" />
          </Partners>
          <Partners>
            <img src={Boticario} alt="O Boticário" />
          </Partners>
          <Partners>
            <img src={Stone} alt="Stone" />
          </Partners>
        </PartnerBox>
      </PartnersContainer>
    </>
  );
}
