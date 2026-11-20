import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Servico from "./Pages/Servico";

function App() {
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
  }

  function App() {
    return <servico />;
  }

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
  
}

export default App;
