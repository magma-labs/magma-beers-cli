// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// // import beerApp from './reducers'
// import MagmaBeersApp from './components/App.js';
//
// // const store = createStore(beerApp)
//
// render(
//   <MagmaBeersApp/>,
//   document.getElementById('root')
// );

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './redux/configure-store'
import { verifyCredentials } from './redux-token-auth-config' // <-- note this is YOUR file, not the redux-token-auth NPM module

const store = configureStore()
verifyCredentials(store) // <-<-<-<-<- here's the important part <-<-<-<-<-

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
