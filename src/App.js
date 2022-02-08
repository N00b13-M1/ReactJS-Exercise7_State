import React, { Component } from 'react';
import Perso from './components/Perso';

class App extends Component {

  state = [
    {
      prenom: "Elias",
      nom: "Ling",
      age: 23
    },
    {
      prenom: "Tom",
      nom: "Ping",
      age: 12
    },
    {
      prenom: "Hannah",
      nom: "K",
      age: 19
    }
  ]
  render() {

    console.log(this.state)
    return (
      <>
        {
          this.state.map(element =>
            <p>Salut les amis je m'apelle {element.prenom} {element.nom} et j'ai {element.age}</p>
            )
        }
        {/* <Perso/> */}
      </>
    );
  }
}

export default App;