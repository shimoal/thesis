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
    console.log('Dashboard component is rendering', this.props.userData.authenticated)
    if (this.props.userData.authenticated === 1) {
      return (
        <div className="container-fluid">
          <div className="row">
            <LeftColumn userCurrent={this.props.userData.user} />
            <RightColumn 
              dashboard={this.state.dashboard}
              userCurrent={this.props.userData.user} 
              authenticated={this.props.userData.authenticated}
              questions={this.props.userData.currentUserQuestions}
              questionsClaimed={this.props.userData.questionsClaimed} 
              addQuestion={this.props.addQuestion} />
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