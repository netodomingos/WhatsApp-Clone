import React from 'react'
import './App.css'

import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'

import UserProvider from './context/user'

export default function App() {
  return (
    <UserProvider>
       <div className="container">
        <Sidebar/>
        <Chat />
      </div>
    </UserProvider>
  );
}
