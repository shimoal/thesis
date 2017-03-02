import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import routes from './Components/routes'

//redux experiment
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import App from './Components/App';

let store = createStore(reducers);
//<Router routes={routes} history={browserHistory}/>
ReactDOM.render(
  <Provider store={store}>
    
    <App/>
  </Provider>,
  document.getElementById('app'));