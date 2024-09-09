import { Body, Header, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Body>
        <h1>Titulo</h1>
        <p>Teste, teste, teste  ...</p>
      </Body>
      <Footer criador="William"/>

    </>
  );
}

export { App };
