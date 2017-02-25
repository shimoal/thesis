import React from 'react'
import axios from 'axios'

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    console.log('e');
  }

  render() {
    return (
      <div>
          <h2> Make an account with us! </h2>
          <button onClick={this.handleSignup}>Sign up with github </button>
      </div>
  )}
}