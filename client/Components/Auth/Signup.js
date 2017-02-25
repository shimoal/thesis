import React from 'react'
import axios from 'axios'

export default class Signup extends React.Component{
  constructor(props) {
    super(props);
  }

  handleSignup() {
    console.log('Signup clicked');
    var username = $('#username').val();
    var email = $('#email').val();
    var data = {
        username: username,
        email: email
      };
    axios.post('/users', data).then( function(response) {
      console.log('inside signup then');
      console.log('signup response', response);
    });

  }

  render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.handleSignup}>
        <h2 className="form-signin-heading">Please Login</h2>

        <a href="/auth/github">Login/signup with github </a>
          <label className="sr-only">Username</label>
          <input type="textarea" className="form-control" placeholder="Username" id="username" required autoFocus/>
          <label className="sr-only">Email address</label>
          <input type="email" id="email" className="form-control" placeholder="Email address" />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
  )}
}