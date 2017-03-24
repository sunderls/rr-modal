import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Modal from './lib/modal';

import App from './components/App';

const store = createStore(combineReducers({
	modals: Modal.reducer
}));

Modal.use(store);

ReactDOM.render(
	<AppContainer>
		<Provider store={store}>
			<App />
		</Provider>
	</AppContainer>, document.getElementById('app'));
