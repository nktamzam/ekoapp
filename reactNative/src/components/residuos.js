import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Residuos extends Component {
  render() {
    const imagenes = {
      3: require("../../assets/residuos_3.png"),
      2: require("../../assets/residuos_2.png"),
      1: require("../../assets/residuos_1.png"),
      0: require("../../assets/residuos_0.png")
    };

    return (
      <View style={style.container}>
        <Text style={{ color: "white" }}>Ahorro residuos</Text>
        <Image style={style.icono} source={imagenes[this.props.residuos]} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    margin: 5,
    alignItems: "center"
  },
  icono: { width: 80, height: 60 }
});
