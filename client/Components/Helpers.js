import React from 'react'
import { Link } from 'react-router'

var Helpers = React.createClass({
  
  renderHelpers: function() {
    
  },
  //pass down all helpers here and map it
  checkHelpers: function() {
    //check helper object
    if (this.props.details.helpers) {
      return(
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
    } else {
      return(<div/>)
    }
  },
  
  componentDidMount: function() {
    console.log('In Helpers.js', this.props);
  },

  render: function() {
    return (
      <div>
        { this.checkHelpers() } 
      </div>
    )
  }
})

export default Helpers