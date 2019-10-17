import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Residuos extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Residuos</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2732c",
    padding: 5
  }
});
