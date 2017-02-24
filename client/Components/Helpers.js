import React from 'react'
import { Link } from 'react-router'

var Helpers = React.createClass({
  //pass down all helpers here and map it
  render: function() {
    return (      
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
    )
  }
})

export default Helpers