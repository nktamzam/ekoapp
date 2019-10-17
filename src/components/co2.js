import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Co2 extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>CO2</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#Ff0b2c",
    padding: 5
  }
});
