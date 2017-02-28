import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Signup from './Auth/Signup'
import { browserHistory } from 'react-router'

export default React.createClass({

  componentWillMount() {
    //check to make sure user is authenticated
    // this.props.checkUserAuth();
    console.log('Dashboard component is mounting', this.props.userData.authenticated)
  },

  componentDidMount() { 
    console.log('Dashboard component is mounting', this.props.userData.authenticated)
    // console.log('In Dashboard props',this.props);
  },

  render() {
    console.log('Dashboard component is rendering', this.props.userData.authenticated)
    if (this.props.userData.authenticated === 1) {
      return (
        <div className="container-fluid">
          <div className="row">
            <LeftColumn userCurrent={this.props.userData.user} />
            <RightColumn userCurrent={this.props.userData.user} questions={this.props.userData.questions} questionsClaimed={this.props.userData.questionsClaimed} addQuestion={this.props.addQuestion} />
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
