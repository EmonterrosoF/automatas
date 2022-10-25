import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { recibirCadena } from "../components/automata";

function App() {
  const [valid, setValid] = useState(false);
  const [cadena, setCadena] = useState("");
  const [resultado, setResultado] = useState("");

  const validador = (e) => {
    const { value } = e.target;
    let isValid = /\s/g.test(value);
    console.log(isValid);
    setValid(isValid);
    if (!isValid) {
      setCadena(value);
    } else {
      setCadena("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResultado(recibirCadena(cadena));
    if (!cadena) {
      setResultado("debes de ingresar una cadena");
    }
    if (valid) {
      setResultado("no puedes dejar espacios en blanco");
      console.log("no puedes dejar espacios en blanco");
    }
  };

  return (
    <div className="App">
      <h1 className="tittle">Automatas</h1>
      <div className="container">
        <img className="filtro" src="automata.svg" alt="automata" />
        <form onSubmit={handleSubmit}>
          <h2>Simbolos del alfabeto valido ** ab **</h2>
          <div className="validador">
            {valid ? (
              <div style={{ color: "#fff" }}>
                <p> no debes dejar espacios te lo dije!</p>
              </div>
            ) : valid || !cadena ? (
              <div style={{ color: "#fff" }}>
                <p>debes de ingresar un valor sin espacios</p>
              </div>
            ) : (
              <div style={{ color: "#fff" }}>
                <p>bien! pero recuerda que tiene que pertenecer al alfabeto</p>
              </div>
            )}
            <div className="contenedorInput">
              <input autoFocus type="text" onChange={validador} />
              <button>Validar</button>
            </div>

            <div className="resultado">
              {" "}
              <h3 style={{ color: "#fff" }}>Resultado: {resultado}</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
