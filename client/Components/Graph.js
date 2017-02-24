import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { browserHistory } from 'react-router'
// var request = require('request');

export default class Collaborate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plot1 : ''
    }
  }

  handler(){
    console.log("testing123");
    // request('http://localhost:8080/graphs', function(err, res, body){
    //   console.log(res);
    // });
    $.get('http://localhost:8080/graph2', function(data){
      console.log(data);
      $('body').append(data);
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handler}>Click Me!</button>
      </div>
    )
  }
}
