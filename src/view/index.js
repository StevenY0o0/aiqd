import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createHistory from 'history/createHashHistory';
import Power from '../reducers/reducers'
import routes from './routes'

//let power={type:'ADMIN'}
const store = createStore(Power);
console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<div>
		    {routes}
		</div>
	</Provider>,
  	document.getElementById('root')
); 
