/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions, 
  ScrollView
} from 'react-native';
import FlexContainer from './src/components/FlexContainer';

export default class flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlexContainer header={'Demo'} customStyle={styles.demo} />

          <FlexContainer header={'Top Row'} customStyle={styles.topRow} />
          <FlexContainer header={'Bottom Row'} customStyle={styles.bottomRow} />
          <FlexContainer header={'Centered Row'} customStyle={styles.centeredRow} />

          <FlexContainer header={'Space-Between Row'} customStyle={styles.spaceBetweenRow} />
          <FlexContainer header={'Space-Around Row'} customStyle={styles.spaceAroundRow} />


          <FlexContainer header={'Flex-Start Column'} customStyle={styles.leftColumn} />
          <FlexContainer header={'Flex-End Column'} customStyle={styles.rightColumn} />
          <FlexContainer header={'Centered Column'} customStyle={styles.centeredColumn} />

          <FlexContainer header={'Space-Between Column'} customStyle={styles.spaceBetweenColumn} />
          <FlexContainer header={'Space-Around Column'} customStyle={styles.spaceAroundColumn} />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },

  demo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // Rows

  centeredRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  topRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  bottomRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  spaceBetweenRow: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  spaceAroundRow: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },


  // Columns

  centeredColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },

  spaceBetweenColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },

  spaceAroundColumn: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

AppRegistry.registerComponent('flexbox', () => flexbox);
