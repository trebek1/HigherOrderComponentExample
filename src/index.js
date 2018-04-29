import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Resources from './components/Resources';
import RequireAuth from './components/Require_Authentication';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<Route path="resources" component={RequireAuth(Resources)} />
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'));
