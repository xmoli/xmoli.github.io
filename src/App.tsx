import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const motto = ["前面即是星辰大海","从这里开始起航吧","日"]
  const num = Math.floor(Math.random()*motto.length)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><button type="button"><div>v0.1</div></button></p>
        <p>{motto[num]}</p>
      </header>
    </div>
  )
}

export default App
