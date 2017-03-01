import React from 'react'
import NavLink from './NavLink'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
addQuestion() {

}
claimQuestion() {

}
checkUserAuth() {
  
}
render() {

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addQuestion: this.addQuestion.bind(this),
       claimQuestion: this.claimQuestion.bind(this),
       checkUserAuth: this.checkUserAuth.bind(this),
       userData: this.state
     })
    );

    return (
      <div>
        <NavLink/>
        {childrenWithProps}
      </div>
    )
  }
}