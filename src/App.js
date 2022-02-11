import React, { Component } from 'react';
import "./App.css";
class App extends Component{

  mensagem = () =>{
    return <p>Olá, a todos os ninjas</p>
  }

  mutiplicacao = (x) =>{
    return x * 5
  }

  render(){
    return(
      <div>
        <h1> Prática React 04 - Arrow Function</h1>
        {this.mensagem()}
        <p>Resultado da mutiplicação: {this.mutiplicacao(20)}</p>
      </div>
    )
  }
}

export default App
