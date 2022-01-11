import React, {  } from 'react'

import Header from './Header/Header'
import List from './List/List'

import {
  Container
} from './Sidebar.styles.js'

const chatList = [
  {
    id: 1,
    picture: 'https://cdn.britannica.com/s:575x450/48/142848-004-E63CC197.jpg',
    name: 'R9',
    lastMessage: 'Lorem Ipsum is simply dummy text of the printingasdasdasd'
  },
  {
    id: 2,
    picture: 'https://folhadolitoral.com.br/wp-content/uploads/2020/03/6cigldyf_1584473140.jpg',
    name: 'Paulin Gogo',
    lastMessage: 'Lorem Ipsum is simply dummy text of the printing'
  },
  {
    id: 3,
    picture: 'https://media.supervasco.com/photo/2021/10/thumbs/casimiro-miguel.jfif.696x0_q70_crop.webp',
    name: 'Casimiro',
    lastMessage: 'Lorem Ipsum is simply dummy text of the printingasdasda'
  },
]

export default function sidebar() {
  return (
    <Container>
      <Header/>
      <List chatlist={chatList} />
    </Container>
  )
}
