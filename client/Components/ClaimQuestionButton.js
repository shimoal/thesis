import React from 'react'

var ClaimQuestionButton = React.createClass({

  componentDidMount: function() {
    console.log('In CLaimButton', this.props.details);
  },

  checkStatus: function() {
    //check question status
    if (this.props.details.status === 'open' ) {
      return(
        <td>
          <form>
            <button onClick={() => this.props.claimQuestion(1,this.props.details.id)} className="btn btn-default" role="button">Claim</button>
          </form>
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
