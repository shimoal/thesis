import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { browserHistory } from 'react-router'

export default class Collaborate extends React.Component {
  constructor(props) {
    super(props);
  }

  handler(){
    console.log("testing123");
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handler}>Click Me!</button>
      </div>
    )
  }
}
