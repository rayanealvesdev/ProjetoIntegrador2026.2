import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import Header from './Header'


function App() {
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
  }


  return (
  
  <div className="App">
    <header className= "App-header">
      <Header title="Header Param" />
      <img src ={logo} className="App-logo" alt="logo" />
      <p>
        <input type="button" value="Clique" onCLick={increment} />
      </p>
      <p>{contador}</p> cliques!
      </header>
  </div>
  );

}

export default App;
