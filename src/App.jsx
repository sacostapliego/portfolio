import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Card from './components/card/Card'
import './App.css'
import HomeContent from './components/home-content/HomeContent'
import RecentProjects from './components/recent-projects/RecentProjects'

function App() {
  return (
    <>
      {console.log("Header import is", Header)}
      <Header />
      <div className="App fade-in">
        <div className="left-column">
          <Card />
        </div>
        <div className="main-content">
          <HomeContent />
          <RecentProjects />
        </div>
      </div>
    </>
  )
}

export default App
