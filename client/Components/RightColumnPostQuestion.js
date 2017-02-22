import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
          
          { /* PostQuestion.js */}
          <div className="">
            <div className="form-group">
              <h2>Post a question</h2>
              <label for="title">Title</label>
              <input type="text" id="title" className="form-control" placeholder="" aria-describedby="basic-addon1"/>
            </div>
            <div className="form-group">
              <label for="question">Question</label>
              <textarea className="form-control" rows="5" id="question"></textarea>
            </div>
            
            <p><a className="btn btn-primary" href="#" role="button">Post</a></p>
          </div>

        </div>
    )
  }
})
