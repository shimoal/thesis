import React from 'react'

export default React.createClass({

  render() {
    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td><h4><a href="">{this.props.details.title}</a></h4></td>
          </tr>
          <tr>
            <td><p>{this.props.details.question}</p></td>
          </tr>
          <tr>
            <td><a href="">Edit</a> | <a href="">Remove</a></td>
          </tr>
        </tbody>
      </table>
    )
  }
})
