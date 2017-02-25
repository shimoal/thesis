import React from 'react'
import axios from 'axios'

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    // axios.get('/auth/github')
  }

  render() {
    return (
      <div>
          <h2> Make an account with us! </h2>
          <a href="/auth/github">Sign up with github </a>
      </div>
  )}
}