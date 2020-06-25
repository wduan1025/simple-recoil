import React, { Component } from 'react';
import LeftBox from './components/leftBox';
import RightBox from './components/rightBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftColor: "red",
      rightColor: "green"
    }
  }
  onLeftClicked = () => {
    const newColor = this.state.rightColor === "green" ? "yellow" : "green"
    this.setState({
      rightColor: newColor
    })
  }
  
  onRightClicked = () => {
    const newColor = this.state.leftColor === "red" ? "purple" : "red"
    this.setState({
      leftColor: newColor
    })
  }
  render() {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        <LeftBox color={this.state.leftColor} onClick={this.onLeftClicked}/>
        <RightBox color={this.state.rightColor} onClick={this.onRightClicked}/>
      </div>
    );
  }
}

export default App;
