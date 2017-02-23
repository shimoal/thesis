import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>Claimed Questions</h3>
        <div className="panel panel-default">
          <div className="panel-body">

            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td><h4><a href="">How do I update the user's model fields in Django?</a></h4></td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
                <tr>
                  <td><a href="">Edit</a> | <a href="">Remove</a></td>
                </tr>
              </tbody>
            </table>

            { /* Claim.js */}
            <table className="table">
              <tbody>
                <tr>
                  <td>Helper A</td>
                  <td><Link to="/collaborate">Accept</Link></td>
                </tr>
                <tr>
                  <td>Helper B</td>
                  <td><Link to="/collaborate">Accept</Link></td>
                </tr>
              </tbody>
            </table>

            { /* QuestionItem.js */}
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td><h4><a href="">how to use a complicated results from paste inside data.table's “i” part?</a></h4></td>
                </tr>
                <tr>
                  <td><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p></td>
                </tr>
                <tr>
                  <td><a href="">Edit</a> | <a href="">Remove</a></td>
                </tr>
              </tbody>
            </table>

            { /* Claim.js */}
            <table className="table">
              <tbody>
                <tr>
                  <td>Helper A</td>
                  <td><Link to="/collaborate">Accept</Link></td>
                </tr>
                <tr>
                  <td>Helper B</td>
                  <td><Link to="/collaborate">Accept</Link></td>
                </tr>
              </tbody>
            </table>

            

          </div>
        </div>


      </div>



    )
  }
})
