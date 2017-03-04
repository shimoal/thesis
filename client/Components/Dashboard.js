import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Signup from './Auth/Signup'
import { browserHistory } from 'react-router'

export default React.createClass({

  getInitialState: function() {
    return {
      dashboard: 1,
    }
  },

  componentWillMount() {
    
  },

  render() {
    console.log('Dashboard component is rendering');
    if (1) {
      return (
        <div className="container-fluid">
        <h1>dashboard</h1>

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
