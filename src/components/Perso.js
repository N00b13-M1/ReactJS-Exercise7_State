import React, { Component } from 'react';

// let prenom = "pio"

class Perso extends Component {
    // showLog = () =>{
    //     // console.log("plop")
    //     this.props.onShowLog()
    //}
    render() {
        return (
            <div>
                {/* <p>{this.props.nom}</p>
                <p>{this.nom}</p>
                <p>{prenom}</p> */}
                <p>Hello je m'apelle {this.props.prenom} {this.props.nom} et j'ai {this.props.age} ans </p>
                <button onClick={() => this.props.showLog()}>Button</button>
            </div>
        );
    }
}

export default Perso;
