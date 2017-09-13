import './public';

import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

import App from './components/App';

import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
