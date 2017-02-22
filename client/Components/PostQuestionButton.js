import React from 'react'

export default class PostQuestionButton extends React.Component {
  render() {
    console.log('showButton is', this.props.showButton);
    if (this.props.showButton === true) {
      return (
        <div>
          <p><a onClick={this.props.showQuestionForm} className="btn btn-primary" role="button">Post a question...</a></p>
        </div>    
      )
    } else {
      return (<div></div>)
    }
  }
}
