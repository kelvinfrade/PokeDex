import React, { Component } from "react";
import Routes from "./routes";
import Header from "./components/Header";
import Main from "./pages/main";
import Pokemon from "./pages/pokemon";
import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
/*class App extends Component {
 //Render: Metodo obrigatorio de qualquer componente
  render() {
    return (
      //conteudo JSX, className para diferenciar do class do JS.
      <div className="App">
       <h1>Hello Word!</h1>
      </div>
    );
  }
}*/
