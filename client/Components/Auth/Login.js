import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {
    axios.get('/login').then(function(response) {
      console.log('inside login then', response);
      
    })
  }

  render() {
    return (
      <div>
          <h2> Welcome back! </h2>
          <button onClick={this.handleLogIn}>Sign in with github </button>
      </div>
  )}
}