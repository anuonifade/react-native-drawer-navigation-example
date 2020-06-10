import React from 'react';
import {Entypo} from '@expo/vector-icons';
import { View, StyleSheet, Text} from 'react-native';


const TopMenu = ({title, navigation}) => {

  return (
    <View style={{...styles.topMenuContainer}}>
      <Entypo name="menu" size={40} color="white" onPress={() => navigation.toggleDrawer()}/>
      <Text style={{...styles.titleText}}>{title}</Text>
    </View>
  );
}

export default TopMenu;

const styles = StyleSheet.create({
  topMenuContainer: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: 'gray',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    padding: 10,
    marginLeft: 30,
  }
})