import React from 'react';
import Stack from './routes/mainRouter';
import store from './store';
import { Provider } from 'mobx-react';

export default class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Stack />
      </Provider>
    );
  }
}
