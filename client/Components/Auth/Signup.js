import React from 'react'
import axios from 'axios'

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    axios.get('/Signup').then( function(response) {
      console.log('inside then');
      console.log('response');
    })
  }

  render() {
    return (
      <div>
          <h2> Make an account with us! </h2>
          <form>
            Username: 
            <input type="textarea"></input>
            Email: 
            <input type="textarea"></input>
            <input type="submit" value="submit" />
          </form>
      </div>
  )}
}