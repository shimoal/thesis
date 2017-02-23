import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { browserHistory } from 'react-router'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount: function() {
    console.log('inside Dashboard', this.props);
  },

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    // console.log(path);
    // browserHistory.push(path);
    this.context.router.push(path); 
  },

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <LeftColumn />
          <RightColumn questions={this.props.userData.questions} addQuestion={this.props.addQuestion} />
        </div>
      </div>
    )
  }
})
