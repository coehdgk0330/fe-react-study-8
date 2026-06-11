import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg">
        <p className="react">React 프로젝트</p>
        <p className= "name">채동하</p>
      </div>
    </>
  )
}

export default App
