import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'
import HomeContent from './components/home-content/HomeContent'

function App() {
  return (
    <>
      <Header />
      <div className="App fade-in">
        <Card />
        <div className="main-content">
          <HomeContent />
        </div>
      </div>
    </>
  )
}

export default App
