import React from 'react'
import Helpers from './Helpers'
import ClaimQuestionButton from './ClaimQuestionButton'

var QuestionItem = React.createClass({
  //do conditional rendering
  
  componentDidMount: function() {
    console.log('inside QuestionItem props', this.props);
  },
  //if helper's children exist, then render the Helpers component
  render: function() {
    return (
      <div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td><h4><a href="">{this.props.details.title}</a></h4></td>
            </tr>
            <tr>
              <td><p>{this.props.details.question}</p></td>
            </tr>
            <tr>
              <ClaimQuestionButton details={this.props.details} claimQuestion={this.props.claimQuestion}/>
            </tr>
          </tbody>
        </table>

        <Helpers details={this.props.details} />

      </div>
    )
  }
})

export default QuestionItem