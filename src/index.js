import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {configureStore} from './configureStore'
// import registerServiceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import 'typeface-roboto';
import './index.css'

const initialState = {
    loading: false,
    params: {
      filters: {
        departure: 'Singapore',
        type: -1
      },
      sorting: '',
      perPage: 5
    }
  }

const store = configureStore(initialState);

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// registerServiceWorker();
