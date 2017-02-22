import React from 'react'
import style from '../sass/PostQuestion.scss';

export default class PostQuestion extends React.Component {
  render() {
    // console.log('ShowForm is', this.props.showForm);
    // console.log('hideQuestionForm', this.props.hideQuestionForm);
    if (this.props.showForm === true) {
      return (
        
        <div className="panel panel-default">
          <div className="panel-body grey noPadding">
            <div className="form-group">
              <h3>Post a question</h3>
              <label>Title</label>
              <input type="text" id="title" className="form-control" placeholder="" aria-describedby="basic-addon1"/>
            </div>
            <div className="form-group">
              <label>Question</label>
              <textarea className="form-control" rows="5" id="question"></textarea>
            </div>
            <p><a className="btn btn-primary" href="#" role="button">Post</a> &nbsp;
               <a onClick={this.props.hideQuestionForm} className="btn btn-default" href="#" role="button">Cancel</a>
            </p>
          </div>
        </div>
      )
    } else {
      return (<div/>);
    }
  }
}
