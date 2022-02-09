import React, { Component } from 'react'
import Perso from './components/Perso'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //     this.state = 
  // }
  
  state = {
    personnes :[
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
  ]}

  showLogParent = () =>{
    let cube = {...this.state}
    cube.personnes[0].age = 23;
    this.setState(cube)
  }

  render() {

    return (

      <div>
        {/* {this.state.personnes.map((element,index) =>
          <h1 key={index}>Hello c'est ici {element.prenom} {element.nom}! J'ai {element.age} ans </h1>)
        } */}
        <Perso 
          prenom={this.state.personnes[0].prenom} 
          nom={this.state.personnes[0].nom} 
          age={this.state.personnes[0].age}
          showLog={() => this.showLogParent()}
        />
      </div>

    )
  }
}

export default App
