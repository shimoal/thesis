import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <h2>{this.props.user.name}</h2>
          <p>{this.props.user.description}</p>
        </div>
      </div>
    )
  }
})
