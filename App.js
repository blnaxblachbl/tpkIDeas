import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
