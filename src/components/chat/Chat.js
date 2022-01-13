import React from 'react'

import ChatEmpty from './chatEmpty/chatEmpty'
// import ChatWindow from './chatWindow/ChatWindow'

import {
  Container
} from './Chat.styles'

import { useUser } from '../../context/user'

export default function Chat() {
  const { user } = useUser()

  return (
    <Container>
      {
        user.id !== undefined ? (
          <div>
            {user.name}
          </div>
        ) : (
          <ChatEmpty/>
        )
      }
    </Container>
  )
}
