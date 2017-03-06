import React from 'react';
import { Link } from 'react-router';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import RightColumnPublic from './RightColumnPublic';
import Signup from './Auth/Signup';
import { browserHistory } from 'react-router';

export default React.createClass({

  getInitialState: function() {
    return {
      dashboard: 1,
    };
  },

  componentWillMount() {
    if (this.props.params.userId !== undefined) { // if public (check React Route params)
      this.props.getUserPublicProfile(this.props.params.userId);
      this.props.getQuestionsOneUser(this.props.params.userId);
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
    if (this.props.params.userId !== undefined) { // if public (check React Route params)
      return (
        <div className="container-fluid">
          <div className="row">
            <LeftColumn userCurrent={this.props.userData.userPublicProfile} />            
            <RightColumnPublic 
              dashboard={this.state.dashboard}
              // authenticated={this.props.userData.authenticated} //need to pass this to enable claim button
              userCurrent={this.props.userData.userPublicProfile}
              questions={this.props.userData.currentUserQuestions}
              authenticated={this.props.userData.authenticated}
              />
          </div>
        </div>
      );
    } else { //private
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
