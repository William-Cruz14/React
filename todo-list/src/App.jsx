import { Body, Header } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <Header nomeUsuario="William" />
      <Body>
        <h1>Titulo</h1>
        <p>Teste, teste, teste  ...</p>
      </Body>
    </>
  );
}

export { App };
