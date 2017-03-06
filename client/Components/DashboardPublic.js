import React from 'react'
import { Link } from 'react-router'
import LeftColumn from './LeftColumn'
import RightColumnPublic from './RightColumnPublic'
import { browserHistory } from 'react-router'

export default React.createClass({

  // getInitialState: function() {
  //   return {
  //     dashboard: 1,
  //   }
  // },

  componentWillMount() {
    //invoke a method in App that will fetch the current userId to populate this form
    this.props.getUserPublicProfile(this.props.params.githubId)
  },

  render() {
    // console.log('Dashboard component is rendering', this.props.userData.authenticated)
    // if (this.props.userData.authenticated === 1) { //need to check localStorage instead
      return (
        <div className="container-fluid">
          <div className="row">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h1>Profile page</h1>
            <p>{this.props.userData.userPublicProfile.name}</p>
            
          </div>
        </div>
      )
    // } else {
    //   return (
    //     <div>
    //       <Signup/>
    //     </div>
    //   )
    // }
    
  }
})
