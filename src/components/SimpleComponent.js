// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component{

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let toggleMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: toggleMood
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
