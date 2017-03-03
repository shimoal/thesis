import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'

export default React.createClass({
  componentWillMount() {
    console.log('inside handleLogout this.props ',this.props);
  },

  handleLogout() {
    var context = this;
    axios.get('/loggingout')
    .then( function (response){
        browserHistory.push('/');
        // console.log('inside handleLogout: success?');
        // context.props.checkUserAuth();
      });
  },

  render() {
    return (
      <div>
          <h2> Are you sure you want to log out? </h2>
          <button onClick={this.handleLogout}>Log out </button>
      </div>
  )}

})