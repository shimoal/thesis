import React from 'react';
import QuestionItem from './QuestionItem';

var OpenQuestions = React.createClass({

  componentWillMount: function(key) {
    // console.log('in OpenQuestions, Authenticated?', this.props.authenticated);  
  },

  renderQuestion: function(key) {
    // console.log('OpenQuestions', this.props.questions);
    // console.log('OpenQuestions', this.props.userCurrent.name);
    if (!this.props.questions) {
      return (
        <div>
          <p>You have no questions. To ask a question, click the "Post a Question" button</p>
        </div>
      );
    }
    return ( 
      <QuestionItem 
          key={key} 
          index={key} 
          authenticated={this.props.authenticated}
          userCurrent={this.props.userCurrent}
          details={this.props.questions[key]} 
          claimQuestion={this.props.claimQuestion}/> 
    );
  },
  componentDidMount: function() {
    // console.log('PROPS in OpenQuestions',this.props);
    // console.log('Inside OpenQuestions', this.props.questions);
    // console.log('CURRENT USER in OpenQuestions: ', this.props.userCurrent);
  },

  checkIfInDashboard: function() {
    if (this.props.dashboard) {
      return (<h3>My Open Questions</h3>);
    } else {
      return (<h3>Open Questions</h3>);
    }
  },

  render: function() {
    return (
      <div>
        
        { this.checkIfInDashboard() }
        <div className="panel panel-default">
          <div className="panel-body">
            { Object.keys(this.props.questions).map(this.renderQuestion) }
          </div>
        </div>


      </div>
    );
  }

});

export default OpenQuestions;

