import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <NavLink/>

        {this.props.children}

      </div>
    )
  }
})
