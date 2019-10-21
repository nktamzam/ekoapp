import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Nivel from "./nivel.js";
import Co2 from "./co2.js";
import Residuos from "./residuos.js";

export default class Cabecera extends Component {
  render() {
    return (
      <View style={style.container}>
        <Nivel></Nivel>
        <Co2></Co2>
        <Residuos></Residuos>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#ef0b7c",
    justifyContent: "space-around",
    height: 100
  }
});
