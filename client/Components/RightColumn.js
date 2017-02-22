import React from 'react'
import {Link, browserHistory} from 'react-router'
import UserProfile from './UserProfile'
import Skills from './Skills'
import PostQuestionButton from './PostQuestionButton'
import PostQuestion from './PostQuestion'
import ClaimedQuestions from './ClaimedQuestions'
import OpenQuestions from './OpenQuestions'
import ClosedQuestions from './ClosedQuestions'

export default React.createClass({
  render() {
    return (
      <div className="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 main">
        
        <UserProfile />

        <Skills />

        <PostQuestionButton />
        
        <PostQuestion />

        <ClaimedQuestions />

        <OpenQuestions />
        
        <ClosedQuestions />

      </div>
    )
  }
})
