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
  return(
    <div className="card-container">
    <h2>This is my movie app</h2>
    < Card title="Star Wars"rating={5} isCool={true} actors={[{name:"Actors"}]}/>
    <Card title = "Stranger Things"/>
    <Card title="Lion King"/>
    </div>
  )
}

export default App
