import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Card=( title)=>{
  return(
  <div>
    <h3>Card component</h3>
  </div>
  )
}

const App = ()=> {
  const[searchTerm ,setSearchTerm]= useState()
  return(
    <main>

    <div className="wrapper">
      <header>
        <img src="./hero-img.png" alt="HeroImage " />
        <h1> Find <span className="text-gradient">
          Movies</span> You'll Enjoy Without the Hassle</h1>
      </header>
    
    <Search/>
    </div>
    </main>
  )
}

export default App
