/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import WeekView from './components/Tournament'

class App extends React.Component {
  render() {
    return(
      <WeekView style={styleOfView.mainContainer} />
    )
  }
}

const styleOfView = StyleSheet.create({
  mainContainer : {
    flex:1,
    alignItems:"center",
    alignContent:"center",
    backgroundColor: 'green',
  },
});

export default App;
