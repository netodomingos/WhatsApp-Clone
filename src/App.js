import React from 'react'
import './App.css'

import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'

export default function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Chat />
    </div>
  );
}
