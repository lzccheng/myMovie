
import React, { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from '../../framework/layout';
import Detail from './component/Detail';

class App extends Component<TabProps, any> {
  render() {
    return <Layout {...this.props}>
    	<Detail />
    </Layout>;
  }
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    return App;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    ReactDOM.hydrate(<AppContainer><Detail {...state} /></AppContainer>, root);
    if (module.hot) {
      module.hot.accept();
    }
  }
  ReactDOM.hydrate(<Detail {...state} />, root);
}

export default bootstrap();