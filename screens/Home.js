import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TopMenu from '../components/TopMenu';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{...styles.container}}>
      <TopMenu title="Home Page" navigation={navigation} />
      <View style={{ ...styles.homeContainer }}>
        <Text style={{ ...styles.homeText }}>HOME SCREEN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeText : {
    fontWeight: '400',
    color: 'white',
    fontSize: 20,
  }
})

export default HomeScreen;