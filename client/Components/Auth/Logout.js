import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'

export default class Logout extends React.Component{
  constructor(props) {
    super(props);
  }

  handleLogout() {
    axios.get('/logout')
          .then( function (response){
            browserHistory.push('/');
          });
  }

  render() {
    return (
      <div>
          <h2> Are you sure you want to log out? </h2>
          <button onClick={this.handleLogout}>Log out </button>
      </div>
  )}
}