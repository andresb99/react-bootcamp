import logo from './logo.svg';
import './App.css';

//import components
import Componete from "./components/Componente"

function App() {

  let variable = "hola Andy"

  return (
    <>
      <Componete />
      <Componete />
      <Componete />
      <Componete />
      <Componete />
      <Componete />
      <Componete />
      <Componete />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {variable}
            <h4>soy el hijo del P</h4>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
    
  );
}

export default App;
