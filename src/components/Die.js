import React, { Component } from "react";
import '../App.css'

// Data: Number of Sides, Current Roll
// Behavior: Roll
class Die extends Component {
  state = {
    //This will pull the sides from the "Dice" component "sideCount" as props
    numSides: this.props.sideCount,
    current: 0
  };

  roll = () => {
    //Function that creates random number using amount of sides and sets value
    //to be displayed ("current") to state
    const currentRoll = Math.ceil(Math.random() * this.state.numSides);
    this.setState(() => ({ current: currentRoll }));
  };

  render() {
    return (
      <section className="card dice-box">
      <button onClick={this.roll}><h5>ROLL </h5></button>
        <div>Sides: {this.state.numSides}</div> 
        <button className="btn-danger m-3"><h5>You Rolled: {this.state.current}</h5></button>
        
      </section>
    );
  }
}

export default Die;
