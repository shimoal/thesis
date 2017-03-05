import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Signup from './Auth/Signup'
import { browserHistory } from 'react-router'

export default React.createClass({

  render() {
    if (this.props.user) {
      return (
        <div className="container-fluid">
          <div className="row">
            <LeftColumn user={this.props.user} />
            <RightColumn 
              user={this.props.user} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Signup/>
        </div>
      )
    }
    
  }
})