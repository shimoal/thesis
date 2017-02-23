import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { browserHistory } from 'react-router'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
})
