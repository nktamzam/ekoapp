import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Cabecera extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.bold}>Acciones</Text>
        <Text style={style.normal}>33/57</Text>
        <Text style={style.bold}>Nivel</Text>
        <Text style={style.normal}>5</Text>
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
    paddingTop: 40,
    height: 100
  },
  bold: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18
  },
  normal: {
    color: "#fff",
    fontSize: 18
  }
});
