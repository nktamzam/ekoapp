import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Nivel extends Component {
  calculaNivel = () => {
    const media = (this.props.nivel / this.props.puntosTotal) * 100;
    if (media < 5) {
      return 0;
    } else if (media < 20) {
      return 1;
    } else if (media < 40) {
      return 2;
    } else if (media < 60) {
      return 3;
    } else if (media < 90) {
      return 4;
    } else {
      return 5;
    }
  };

  render() {
    const imagenes = {
      5: require("../../assets/nivel_5.png"),
      4: require("../../assets/nivel_4.png"),
      3: require("../../assets/nivel_3.png"),
      2: require("../../assets/nivel_2.png"),
      1: require("../../assets/nivel_1.png"),
      0: require("../../assets/nivel_0.png")
    };

    return (
      <View style={style.container}>
        <Text style={{ color: "white" }}>Nivel</Text>
        <Image style={style.icono} source={imagenes[this.calculaNivel()]} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    marginTop: 30,
    alignItems: "center"
  },
  icono: { width: 70, height: 20 }
});
