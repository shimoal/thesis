import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <h2>{this.props.userCurrent.name}</h2>
          <p>{this.props.userCurrent.description}</p>
          <p>debugging only: </p>
          <ul>
            <li>id: {this.props.userCurrent.id}</li>
            <li>email: {this.props.userCurrent.email}</li>
            <li>photo: {this.props.userCurrent.profileImage}</li>
          </ul>
        </div>
      </div>
    )
  }
})
