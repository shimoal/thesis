import React from 'react'

var ClaimQuestionButton = React.createClass({

  checkStatus: function() {
    //check question status
    if (this.props.details.status === 'open') {
      return(
        <td>
          <button onClick={this.props.claimQuestion} className="btn btn-default" role="button">Claim</button>
        </td>
      )
    } else {
      return(<div/>)
    }
  },

  render: function() {
    // console.log('showButton is', this.props.showButton);
    // console.log('showQuestionForm', this.props.showQuestionForm);
    return (
      <div>
        { this.checkStatus() } 
      </div>
    )
  }
});

export default ClaimQuestionButton
