import React from 'react'
import { Link } from 'react-router'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Signup from './Auth/Signup'
import { browserHistory } from 'react-router'
import axios from 'axios'

export default React.createClass({

  // // getInitialState: function() {
  // //   return {
  // //     dashboard: 1,
  // //   }
  // // },

  // componentWillMount() {


  // },

  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  componentDidMount() {
    var userId = this.props.userData.user.userId;
    console.log('userId:', this.props.userData);

    var data = {
      userId: userId
    };

    this.props.getUserQuestions(data);
    this.props.getUserClaimedQuestions(data);
  },

  render() {
    // console.log('Dashboard component is rendering', this.props.userData.authenticated)
    if (this.props.userData) { //need to check localStorage instead
      return (
        <div className="container-fluid">
          <div className="row">
            <LeftColumn userCurrent={this.props.userData.user} />
            <RightColumn
              userCurrent={this.props.userData.user} 
              questions={this.props.userData.currentUserQuestions}
              questionsClaimed={this.props.userData.questionsClaimed} 
              acceptHelper={this.props.acceptHelper}
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
