import React from 'react';
import { Link } from 'react-router';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Signup from './Auth/Signup';
import { browserHistory } from 'react-router';

export default React.createClass({

  getInitialState: function() {
    return {
      dashboard: 1,
    };
  },

  componentWillMount() {
    //invoke a method in App that will fetch the current userId to populate this form
    
    if (this.props.params.userId !== undefined) { // if public (using React Route params)
      this.props.getUserPublicProfile(this.props.params.userId);  
    }
  },

  componentDidMount() {
    var userId = this.props.userData.user.userId;
    console.log('userId:', this.props.userData);

    var data = {
      userId: userId
    };

    this.props.getUserQuestions(data);
    this.props.getUserClaimedQuestions(data);
  },

  publicOrPrivate: function() {
    if (this.props.params.userId !== undefined) { // if public (using React Route params)
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
      );
    } else { //private
      if (this.props.userData.authenticated === 1) { //need to check localStorage instead
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
                acceptHelper={this.props.acceptHelper}
                addQuestion={this.props.addQuestion} />
            </div>
          </div>
        );
      } else {
        return (
          <Signup/>
        );
      }
    }
  }, 

  render() {
    return (
      <div>
        { this.publicOrPrivate() }
      </div>
    );
  }
});
