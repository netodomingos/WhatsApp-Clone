import React from 'react'
import {
  Container,
  Image,
  Title,
  Description
} from './chatEmpty.styles'

const wppImage = 'https://i.imgur.com/HJNiMMT.jpg'

export default function chatEmpty() {
  return (
    <Container>
      <Image src={wppImage} />
      <Title>
        Mantenha seu celular conectado
      </Title>
      <Description>
        O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.
      </Description>
    </Container>
  )
}
