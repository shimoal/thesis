import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import routes from './Components/routes'
import NavLink from './Components/NavLink'

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app'));