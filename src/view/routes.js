import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
//import Container from 'container'
import createHistory from 'history/createBrowserHistory'
//import Login from 'view/login'

const history = createHistory()
const location = history.location

const routes = (
	<div>进入routes</div>
//	<HashRouter>
//  <div>
//    <Route path="/" component={Container} />
//    <Route path="/view/login" component={Login} />
//    {location.hash === '#/' ? <Redirect to='/view/login' /> : ''}
//  </div>
//</HashRouter>
//	<Router  history = {history}>
//  	<Route exec path="/" component={Container} />
//		<IndexRedirect to="login" />
//      <Route path="login" component={ Components.SignIn } />
//      <Route path="index" component={ Components.Index } />
//  </Router>
)

export default routes