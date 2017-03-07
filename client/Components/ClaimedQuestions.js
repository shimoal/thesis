import React from 'react';
import { Link } from 'react-router';
import QuestionItem from './QuestionItem';

var ClaimedQuestions = React.createClass({

  renderQuestion: function(key) {
    // console.log('Inside ClaimedQuestions renderQuestion', this.props.questionsClaimed);
    return ( <QuestionItem 
                key={key} 
                index={key} 
                acceptHelper={this.props.acceptHelper} 
                details={this.props.questionsClaimed[key]}/> );
  },
  componentWillMount: function() {
    // console.log('Inside ClaimedQuestions this.props', this.props);

  },
  render: function() {
    return (
      <div>
        <h3>Claimed Questions</h3>
        <div className="panel panel-default">
          <div className="panel-body">
            { Object.keys(this.props.questionsClaimed).map(this.renderQuestion) }
          </div>
        </div>
      </div>
    );
  }
});

export default ClaimedQuestions;