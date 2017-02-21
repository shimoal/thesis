import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
          { /* UserProfile.js */}
          <div className="row">
            <div className="col-md-10">
              <h2>Ai Shi</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            </div>
          </div>

          { /* Skills.js */}
          <div className="row">
            <div className="col-md-8">
              <table className="table">
              <tbody>
                <tr>
                  <td><strong>Skills</strong></td>
                  <td>Javascript (5)</td>
                  <td>CSS (4)</td>
                  <td>React (4)</td>
                  <td>Angular (5)</td>
                  <td>MySQL (5)</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          { /* PostQuestionButton.js */}
          <div>
            <p><a className="btn btn-primary" href="#" role="button">Post a question</a></p>
          </div>
          
          { /* ClaimedQuestions.js */}
          <div className="table-responsive">
            <h3 className="sub-header">Claimed Questions</h3>

            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Claimed Question component 1</td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
              </tbody>
            </table>

            { /* Claim.js */}
            <table className="table">
              <tbody>
                <tr>
                  <td>Helper A</td>
                  <td><a href="#">Claim</a></td>
                </tr>
                <tr>
                  <td>Helper B</td>
                  <td><a href="#">Claim</a></td>
                </tr>
              </tbody>
            </table>

            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Claimed Question component 2</td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
              </tbody>
            </table>

            { /* Claim.js */}
            <table className="table">
              <tbody>
                <tr>
                  <td>Helper A</td>
                  <td><a href="#">Claim</a></td>
                </tr>
                <tr>
                  <td>Helper B</td>
                  <td><a href="#">Claim</a></td>
                </tr>
              </tbody>
            </table> 

          </div>

          { /* OpenQuestions.js */}
          <div className="table-responsive">
            <h3 className="sub-header">Open Questions</h3>
            
            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Open Question component 1</td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
                <tr>
                  <td><a href="">Edit</a> | <a href="">Remove</a></td>
                </tr>
              </tbody>
            </table>

            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Open Question component 2</td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
                <tr>
                  <td><a href="">Edit</a> | <a href="">Remove</a></td>
                </tr>
              </tbody>
            </table>

          </div>

          { /* ClosedQuestions.js */}
          <div className="table-responsive">
            <h3 className="sub-header">Closed Questions</h3>
            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Closed Question component 1</td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
              </tbody>
            </table>
            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Closed Question component 2</td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
              </tbody>
            </table>
            
          </div>

        </div>
    )
  }
})
