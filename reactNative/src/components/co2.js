import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Co2 extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Energia: {this.props.energia}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
    backgroundColor: "#ccc"
  }
});
