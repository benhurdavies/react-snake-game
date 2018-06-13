import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './store/configureStore';
import { loadThemes, applyDefaultTheme } from './store/app/action';

const history = createBrowserHistory();
const store = configureStore(history);
store.dispatch(loadThemes());
store.dispatch(applyDefaultTheme());

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

registerServiceWorker();
