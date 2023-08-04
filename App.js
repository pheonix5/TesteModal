import React, { useState } from "react";
import { Modal } from 'react-native'

import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles'

import ModalTeste from "./src/ModalTeste";

export default function App(){
  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal (){
    setOpenModal(true);
  }

  function handleCloseModal(){
    setOpenModal(!openModal)
  }

  return(
    <Container>
      <Titulo cor="#FF0000">Sujeito Programador</Titulo>
      <Nome>Olá Lucas</Nome>

      <BotaoSujeito onPress={handleOpenModal}>
        <BotaoText>Abrir modal</BotaoText>
      </BotaoSujeito>

      <Modal
        visible={openModal}
        animationType="false"
        transparent={true}
      >
        <ModalTeste closeModal={handleCloseModal}/>
      </Modal>
    </Container>
  )
}

