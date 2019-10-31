import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
export default class Dificultad extends Component {
  render() {
    const imagenes = {
      3: require("../../assets/dificultad_3.png"),
      2: require("../../assets/dificultad_2.png"),
      1: require("../../assets/dificultad_1.png")
    };

    return (
      <View style={style.container}>
        <Text style={{ color: "white" }}>Dificultad</Text>
        <Image style={style.icono} source={imagenes[this.props.dificultad]} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    marginTop: 6,
    marginBottom: 5,
    marginHorizontal: 13,
    alignItems: "center",
    backgroundColor: "#666",
    borderRadius: 10
  },
  icono: { width: 80, height: 60 }
});
