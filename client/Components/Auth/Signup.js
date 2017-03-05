import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn() {
    console.log('Login clicked');
    var username = $('#username').val();
    var email = $('#email').val();
    var data = {
        username: username,
        email: email
      };
    var context = this;

    axios.get('/users', {params: data}).then(function(response) {
      console.log('inside login then', response);
    })

  }

  render() {
    return (
      <div>

          <h2> Log in or sign up with Github: </h2>
          <a href="auth/github">Log in or sign up with Github:</a>

      </div>
  )}
}