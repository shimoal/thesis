import React from 'react'
import { Link } from 'react-router'
import HelperAcceptButton from './HelperAcceptButton'

var Helpers = React.createClass({
  
  componentDidMount: function(key) {
    console.log('In Helpers.s DidMount this.props', this.props);
    console.log('In Helpers.s DidMount this.props.details', this.props.details);
  },

  renderHelpers: function(key) {
    return ( 
      
      <div className="row">
        <div className="col-sm-9 col-md-9">
          {this.props.details.helpers[key]}
        </div>
        <div className="col-sm-8 col-md-3">
          <HelperAcceptButton details={this.props.details} />
        </div>
      </div>

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

  render: function() {
    return (
      <div className="bg-success">
        { this.checkHelpers() } 
      </div>
    )
  }
})

export default Helpers