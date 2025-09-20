import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Card />
        <div className="main-content">
          <h1>Welcome to My Personal Website</h1>
          <p>This is some content that you can scroll through...</p>
          
          <h2>About Me</h2>
          <p>I'm a passionate full-stack developer with experience in modern web technologies. I love creating user-friendly applications and solving complex problems.</p>
          
          <h2>Experience</h2>
          <p>Here's some more content to demonstrate the layout. The user card on the left will stay in view as you scroll through this content.</p>
          
          <h2>Projects</h2>
          <p>I've worked on various projects ranging from web applications to mobile apps. Each project has taught me something new and helped me grow as a developer.</p>
          
          <div style={{ height: '100vh', padding: '20px 0' }}>
            <p>Keep scrolling to see how the card stays in place using sticky positioning!</p>
            <p>This creates a much better user experience than a fixed overlay.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
