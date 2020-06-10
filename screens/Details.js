import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TopMenu from '../components/TopMenu';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ ...styles.container }}>
      <TopMenu title="Details Page" navigation={navigation} />
      <View style={{ ...styles.detailsContainer }}>
        <Text style={{ ...styles.homeText }}>DETAILS SCREEN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  detailsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    fontWeight: "400",
    color: "white",
    fontSize: 20,
  },
});

export default DetailsScreen;
