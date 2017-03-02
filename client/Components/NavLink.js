import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  
  displayLoginLogout() {
    if (this.props.userData.authenticated === 1) {
      return (
        <li><Link to="/logout">Logout</Link></li>
        )
    } else {
      return (<li><Link to="/login">Login/Signup</Link></li>)
    }
  },
  displayDashboardLink() {
    if (this.props.userData.authenticated === 1) {
      return (<li><Link to="/dashboard">My Dashboard</Link></li>)
    }
  },

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand logo">Hackeroo</Link>
          </div>
          
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/about">How it works</Link></li>
              <li><Link to="/collaborate">Collaborate</Link></li>
              <li><Link to="/login">Log in </Link></li>
              <li><Link to="/logout">Log out </Link></li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})