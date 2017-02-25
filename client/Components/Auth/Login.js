import React from 'react'

export default class Login extends React.Component{
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {
    console.log('e');
  }

  render() {
    return (
      <div>
          <h2> Welcome back! </h2>
          <button onClick={this.handleLogIn}>Sign in with github </button>
      </div>
  )}
}