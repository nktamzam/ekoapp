import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
export default class Nivel extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Nivel</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f0b7c",
    padding: 5
  }
});
