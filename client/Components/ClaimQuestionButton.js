import React from 'react'

export default class PostQuestionButton extends React.Component {

  render() {
    // console.log('showButton is', this.props.showButton);
    // console.log('showQuestionForm', this.props.showQuestionForm);
    if (this.props.details.status === 'open') {
      return (
        <td>
          <button onClick={this.props.claimQuestion()} className="btn btn-default" role="button">Claim</button>
        </td>   
      )
    } else {
      return (<div/>)
    }
  }
}
