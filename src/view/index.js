import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import routes from '../routes';
//import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'



ReactDOM.render(
//	<Provider store={store}>
//	    <ConnectedRouter history={history}>
		    <div>
		        { routes }
		    </div>,
//	    </ConnectedRouter>
//	</Provider>,
  	document.getElementById('root')
);