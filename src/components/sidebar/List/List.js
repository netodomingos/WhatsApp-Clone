import React from 'react'

import {
  Container,
  ChatContainer,
  Picture,
  ChatInternalContainer,
  Name,
  Message
} from './List.styles'

import { useUser } from '../../../context/user'

export default function List({chatlist}) {
  const { setUser } = useUser()

  return (
    <Container>
      {chatlist.map(item => (
        <ChatContainer onClick={() => setUser(item)} key={item.id}>
          <Picture src={item.picture}/>
          <ChatInternalContainer>
            <Name>{item.name}</Name>
            <Message>{item.lastMessage}</Message>
          </ChatInternalContainer>
        </ChatContainer>
      ))}
    </Container>
  )
} 