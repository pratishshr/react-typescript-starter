import './public';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import App from './components/App';

import init from './init';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

init().then(({ locale, messages }) => {
  render(
    <IntlProvider locale={locale} messages={messages}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider >,
    document.getElementById('root') as HTMLElement
  );

});

registerServiceWorker();
