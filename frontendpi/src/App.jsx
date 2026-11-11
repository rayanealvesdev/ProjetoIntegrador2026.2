import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  let contador= 0;
  function increment(){
  contador ++;
  console.log(contador);
  }

  return (
    <>
      <section id="center">

        <Header title="alguma coisa" />
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <p> <input type="button" value="clique" onClick={increment} /></p>
        <div>

          <h1>Projeto integrador</h1>
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App;
