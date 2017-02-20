import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
          <div className="row">
            <div className="col-md-10">
              <h2>Ai Shi</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            </div>
          </div>
          
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

          
          <div className="table-responsive">
            <h3 className="sub-header">Open Questions</h3>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Question component 1</td>
                </tr>
                <tr>
                  <td>Question component 2</td>
                </tr>
                <tr>
                  <td>Question component 3</td>
                </tr>
              </tbody>
            </table>
            <p><a className="btn btn-default" href="#" role="button">More</a></p>
          </div>
          
          
          <div className="table-responsive">
            <h3 className="sub-header">Reviews</h3>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Review component 1</td>
                </tr>
                <tr>
                  <td>Review component 2</td>
                </tr>
                <tr>
                  <td>Review component 3</td>
                </tr>
              </tbody>
            </table>
            <p><a className="btn btn-default" href="#" role="button">More</a></p>
          </div>

        </div>
    )
  }
})
