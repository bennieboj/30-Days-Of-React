// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    firstName: '',
    message: '',
    key: '',
    xpos: 100,
    ypos: 100,
  }
  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: 'Welcome to the world of events',
    })
  }
  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    this.setState({ message: 'mouse is moving' })
  }
  // triggered whenever the mouse moves
  handleMouseMove2 = (e) => {
    let x = Math.floor((Math.random() * 500) + 1);
    let y = Math.floor((Math.random() * 500) + 1);
    this.setState({ xpos: x, ypos: y })
  }
  // to get value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }
  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault()
    console.log(this.state)
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    })
  }
  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    this.setState({ message: 'Input field has been blurred' })
  }
  // This event triggers during a text copy
  handleCopy = (e) => {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }
  render() {
    const divStyles = {
      position: 'fixed',
      left: this.state.xpos,
      top: this.state.ypos,
      width: '30x',
      border: '3px solid #73AD21'
    }
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={this.handleChange}
              name='firstName'
              value={this.state.value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>







        <div onMouseMove={this.handleMouseMove2} style={divStyles}>aaaaa</div>
        
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
