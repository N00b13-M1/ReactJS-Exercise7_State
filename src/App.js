import React, { Component } from 'react'
import Perso from './components/Perso'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //     this.state = 
  // }
  
  state = [
    {
      prenom: "Plop",
      nom: "X",
      age: 14,
    },
    {
      prenom: "Sammy",
      nom: "Y",
      age: 15,

    },
    {
      prenom: "Nico",
      nom: "Z",
      age: 20,

    }
  ]

  onShowLogParent = () =>{
    this.setState([
      {
        prenom: "Elias",
        nom: "X",
        age: 25,
      },
      {
        prenom: "Sammy",
        nom: "Y",
        age: 15,
  
      },
      {
        prenom: "Nico",
        nom: "Z",
        age: 20,
  
      }
    ])
  }

  render() {
    console.log(this.state)
    return (

      <div>
        {/* {this.state.map(element =>
          <h1>Hello c'est ici {element.prenom} {element.nom}! J'ai {element.age} ans </h1>)
        } */}
        <Perso 
          prenom={this.state[0].prenom} 
          nom={this.state[0].nom} 
          age={this.state[0].age}
          onShowLog={this.onShowLogParent}
        />
      </div>

    )
  }
}

export default App
