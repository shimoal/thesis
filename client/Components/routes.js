import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Home from './Home'
import Collaborate from './Collaborate'
import Login from './Auth/Login'
import Logout from './Auth/Logout'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="/about" component={About}/>
    <Route path="/collaborate" component={Collaborate}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>

  </Route>
)