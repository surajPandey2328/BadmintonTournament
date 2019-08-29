import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

handleTextInputChange = () => {
  console.log('TextChange')
}

handleNext = () => {
  console.log('Next Clicked.')
}

const WeekView = () => {
  return (
    <Fragment>
      <SafeAreaView style={styleOfView.mainContainer}/>
      <View style={styleOfView.mainContainer}>
        <View style={styleOfView.viewStyle} >
          <Text style={styleOfView.textStyle}>
            Welcome To Badminton Tournament 
          </Text>
        </View>
      </View>
      <TextInput style={styleOfView.inputStyle} placeholder='Select Date'
      onChangeText={handleTextInputChange}
      />
      <Button style={styleOfView.nextButtonStyle} onclick={this.handleNext}
      title='NEXT'
      />
    </Fragment>
  );
};

const styleOfView = StyleSheet.create({
  mainContainer: {
    // flex:1,
    // flexDirection: 'column',
    alignItems:'center',
    alignContent:'center',
  },
  viewStyle:{
    //flex:0.1,
    //padding: 20,
    marginTop: '30%',
    marginLeft: 20,
    marginRight: 20,
    borderWidth:2,
    borderColor: 'green',
    borderRadius: 5,
  },
  textStyle : {
    padding: 10,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign:'center',
  },
  inputStyle: {
    padding: 10,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius:5,
    height: 50,
  },
  nextButtonStyle:{
    marginLeft:20,
    marginRight: 20,
    marginBottom: 20,
    fontSize:5,
    fontWeight:'bold',
  },
})

// const WeekTextInput = () => {
//   return (
//     <TextInput style={styleOfView.inputStyle} onChange={this.handleTextInputChange} 
//     placeholder='Date' />
//   )
// }

export default WeekView;