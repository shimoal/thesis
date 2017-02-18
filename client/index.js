import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import App from './Components/App'
import About from './Components/About'
import Repos from './Components/Repos'
import Repo from './Components/Repo'
import Home from './Components/Home'
import routes from './Components/routes'

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app'));