import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Nivel from "./nivel.js";
import Co2 from "./co2.js";
import Residuos from "./residuos.js";

export default class Pie extends Component {
  render() {
    return (
      <View style={style.container}>
        <Nivel dificultad={this.props.dificultad}></Nivel>
        <Co2 energia={this.props.energia}></Co2>
        <Residuos residuos={this.props.residuos}></Residuos>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    height: 100
  }
});
