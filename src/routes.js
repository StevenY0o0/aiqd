import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
//import Container from 'container'
import createHistory from 'history/createBrowserHistory'

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
//	<Switch>
//  	<Route exec path="/" component={Container} />
//  	<Route exec path="/login" component={Login} />
//  </Switch>
)

export default routes