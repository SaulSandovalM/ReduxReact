import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import {loadPeople} from './actions/peopleActions';

const store = configureStore();
store.dispatch(loadPeople());//el dispatch ejecuta una action

const WithProvider = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
