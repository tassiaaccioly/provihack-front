//dependências
import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/challengesApi";

import Group from "../../assets/icons/group.svg";
import Hora from "../../assets/icons/hora.svg";
import Projetor from "../../assets/icons/projetor.svg";

import {
  CompanyLogo,
  CompanyContainer,
  DetailsContainer,
  ConfirmContainer,
  ColumnContainer,
  TimeCard,
  LiveCard,
} from "../../styles/challenges";
import { MainBtn } from "../../styles/buttons";
import Confirmation from "./Confirmation";

export default function BigChallenge() {
  useContext(AuthContext);

  const [entryModal, setEntryModal] = useState(false);

  const [challenge, setChallenge] = useState({
    name: "",
    description: "",
    maxParticipantsPerGroup: 0,
    maxGroups: 0,
    areas: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/bigchallenge");

        console.log(response);

        setChallenge({ ...response.data.result[0] });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  function handleClick() {
    setEntryModal(true);
  }

  return (
    <>
      {entryModal ? (
        <Confirmation
          id={challenge._id}
          entryModal={entryModal}
          setEntryModal={setEntryModal}
        />
      ) : (
        <></>
      )}
      <CompanyLogo>
        <img
          src="https://marketing.provi.com.br/hubfs/Group%2018.png"
          alt="Provi Hack woman"
        />
      </CompanyLogo>
      <CompanyContainer>
        <DetailsContainer>
          <h1>Detalhes</h1>
          <TimeCard>
            <div
              style={{
                display: "flex",
                marginRight: "8rem",
              }}
            >
              <img style={{ width: "55px" }} src={Group} alt="Ícone de Grupo" />
              <p>
                Limite de pessoas{" "}
                <strong>
                  {challenge.maxParticipantsPerGroup * challenge.maxGroups}
                </strong>
              </p>
            </div>
            <div>
              <p>Áreas Disponíveis</p>
              <p>
                {challenge.areas.map((area, idx, arr) => (
                  <strong key={idx}>
                    {idx === arr.length - 1 ? `${area}` : `${area}, `}
                  </strong>
                ))}
              </p>
            </div>
          </TimeCard>
          <p>{challenge.description}</p>
        </DetailsContainer>
        <LiveCard>
          <TimeCard>
            <img src={Hora} alt="Horário" />
            <div>
              <strong>Terça-feira, X de maio de 2021</strong>
              <p>18h00 - 19h00</p>
              <a href="#">Adicionar na Agenda</a>
            </div>
          </TimeCard>
          <TimeCard>
            <img src={Projetor} alt="Live" />
            <div>
              <strong>Evento Online</strong>
              <p>Link visível para participantes</p>
            </div>
          </TimeCard>
        </LiveCard>
      </CompanyContainer>
      <ConfirmContainer>
        <ColumnContainer>
          <TimeCard>
            <h3>ter, XX de maio de 2021</h3>
            <h4>
              máx. <strong>{challenge.maxGroups}</strong> grupos
            </h4>
          </TimeCard>
          <h2>{challenge.name}</h2>
        </ColumnContainer>
        <MainBtn onClick={handleClick}>Confirmar</MainBtn>
      </ConfirmContainer>
    </>
  );
}
