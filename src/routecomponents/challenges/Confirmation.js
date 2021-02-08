//dependencies
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//infelizmente, quando cheguei nesse componente aconteceu algum erro na api pois não estava conseguindo popular com os grupos. Para não entregar em branco, deixei a maior parte do meu código comentado do jeito que já tinha feito e simulei visualmente como seria se tivessemos a resposta da api usando uma biblioteca json por conta do tempo.

//contexts
import { AuthContext } from "../../contexts/authContext";
import api from "../../apis/challengesApi";

//components
import {
  PopUp,
  ContainerPopUp,
  CloseBtn,
  GoBackBtn,
  GroupsContainer,
  H1,
  CompanyContainer,
} from "../../styles/modal";
import Confirmed from "./Confirmed";
import Groups from "./Groups";

//images
import Delete from "../../assets/icons/delete.svg";
import ArrowBack from "../../assets/icons/arrowback.svg";

export default function SignUp(props) {
  const authContext = useContext(AuthContext);
  const { history, entryModal, setEntryModal, id } = props;

  //State do registro
  const [participant, setParticipant] = useState({});

  //state do modal de confirmação de registro
  const [confirmModal, setConfirmModal] = useState(false);

  //state com os grupos do challege
  // const [challengeGroups, setChallengeGroups] = useState([]);

  //buscando as informações sobre o challenge para disponibilizar os grupos
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const challenge = await api.get(`/groups/${id}`);

  //       const groups = [];

  //       const response = challenge.data.groups.map(async (group) => {
  //         const grupo = await api.get(`/group/${group}`);
  //         groups.push(grupo.data.result);
  //       });
  //       setChallengeGroups([...groups]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  function ClosePopUp() {
    setEntryModal(!entryModal);
  }

  // function handleClick() {
  //   setConfirmModal(!confirmModal);
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   try {
  //     // const response = await api.post(`/register/bigchallenge/${id}`);

  //     setConfirmModal(!confirmModal);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <>
      <PopUp onClick={ClosePopUp}></PopUp>
      <ContainerPopUp style={{ height: "auto", padding: "5rem" }}>
        {confirmModal ? (
          <Confirmed
            challengeId={id}
            entryModal={entryModal}
            setEntryModal={setEntryModal}
          />
        ) : (
          <>
            <H1>Escolha o seu grupo!</H1>
            <GroupsContainer>
              <Groups
                confirmModal={confirmModal}
                setConfirmModal={setConfirmModal}
              />
            </GroupsContainer>
            <CompanyContainer>
              <div>
                <img
                  src="https://marketing.provi.com.br/hubfs/Group%2018.png"
                  alt="Provi Hack woman"
                />
              </div>
              <div>
                <strong>Hackatanga Provi</strong>
                <p>Check-out</p>
              </div>
              <div>
                <strong>Terça-feira, XX de maio de 2021</strong>
                <p>18h00 até 19h00</p>
              </div>
            </CompanyContainer>
          </>
        )}
        <GoBackBtn onClick={ClosePopUp}>
          <img width="22px" src={ArrowBack} alt="Voltar" />
        </GoBackBtn>
        <CloseBtn onClick={ClosePopUp}>
          <img width="22px" src={Delete} alt="Fechar" />
        </CloseBtn>
      </ContainerPopUp>
    </>
  );
}
