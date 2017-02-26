import React from 'react'
import { Link } from 'react-router'

var Helpers = React.createClass({
  
  renderHelpers: function(key) {
    return ( 
      <tr>
        <td>{this.props.details.helpers[key]}</td>
        <td><Link to="/collaborate">Accept</Link></td>
      </tr>
    )
  },
  //pass down all helpers here and map it
  checkHelpers: function() {
    //check helper object
    if (this.props.details.helpers) {
      return(
        <table className="table">
          <tbody>
            { Object.keys(this.props.details.helpers).map(this.renderHelpers) }
          </tbody>
        </table>
      )
    } else {
      return(<div/>)
    }
  },
  
  componentDidMount: function() {
    // console.log('In Helpers.js', this.props);
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