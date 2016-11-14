import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';

const FlexContainer = ({ customStyle, header }) => {

  const {
    container, 
    title,
    titleBar,
    box,
    powder, 
    sky,
    steel,
  } = styles;

  return (
    <View style={{...container}}>
      <View style={titleBar}>
        <Text style={title}>{header}</Text>
      </View>
      <View style={customStyle}>
        <View style={{...box, ...powder}}></View>
        <View style={{...box, ...sky}}></View>
        <View style={{...box, ...steel}}></View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    width: Dimensions.get('window').width,
    height: 300,
    marginTop: 30,
    marginBottom: 10,

    backgroundColor: 'white',

    shadowOffset: {width: 0, height: 1},
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  title: {
    fontSize: 16,
    color: '#1c1c1c'
  },

  titleBar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 10,
    borderBottomColor: '#ecf0f1',
  },

  box: {
    width: 50,
    height: 50,
    margin: 5,
  },

  powder: {
    backgroundColor: 'powderblue',
  },

  sky: {
    backgroundColor: 'skyblue',
  },

  steel: {
    backgroundColor: 'steelblue',
  },
}


export default FlexContainer;