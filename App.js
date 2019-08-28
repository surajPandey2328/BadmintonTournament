/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
      <View style={styleOfView.viewStyle}>
        <Text style={styleOfView.textStyle}>Welcome To Week Tournament </Text>
      </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styleOfView = StyleSheet.create({
viewStyle : {
 flex:1,
 alignItems:"center",
 alignContent:"center",
 backgroundColor: 'green',
},
textStyle : {fontSize: 20 , color: 'red' , fontWeight: 'bold'}

})







export default App;
