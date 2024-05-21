import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Chat from './components/chat/index'
import Navbar from './components/navbar/index'

function App() {
  return (
    <>
      <Navbar />
      <Chat />
    </>
  );
}

export default App;
