import React from 'react'

import {
  Container,
  ChatContainer,
  Picture,
  ChatInternalContainer,
  Name,
  Message
} from './List.styles'

export default function List(props) {
  return (
    <Container>
      {props.chatlist.map(item => (
        <ChatContainer>
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
