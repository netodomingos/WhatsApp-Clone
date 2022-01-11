import React from 'react'

import {
  Container,
  InternalContainer,
  Avatar,
  Buttons,
  Button,
  SearchContainer,
  SearchComponent,
  SearchInput
} from './Header.styles'

import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchIcon from '@mui/icons-material/Search';

const logoSrc = 'https://files.tecnoblog.net/wp-content/uploads/2021/11/venom-branco.png'
const styleButton = { width: '10px', height: '10px', color: '#51585c' }

export default function Header() {
  return (
    <Container>
      <InternalContainer>
        <Avatar src={logoSrc} />
        <Buttons>
          <Button>
            <DonutLargeRoundedIcon style={styleButton} />
          </Button>
          <Button>
            <ChatRoundedIcon style={styleButton} />
          </Button>
          <Button>
            <MoreVertRoundedIcon style={styleButton} />
          </Button>
        </Buttons>
      </InternalContainer>

      <SearchContainer>
       <SearchComponent>
          <SearchIcon style={styleButton}/>
          <SearchInput placeholder='Pesquisar ou começar uma nova conv...'/>
       </SearchComponent>
      </SearchContainer>
    </Container>
  )
}
