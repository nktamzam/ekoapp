import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Completadas extends Component {
  render() {
    const imagenes = {
      3: require("../../assets/residuos_3.png"),
      2: require("../../assets/residuos_2.png"),
      1: require("../../assets/residuos_1.png"),
      0: require("../../assets/residuos_0.png")
    };

    return (
      <View style={style.container}>
        <Text style={{ color: "white" }}>Acciones</Text>
        <Text style={{ color: "white" }}>
          {Object.keys(this.props.completadas).length} / {this.props.total}
        </Text>
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
  icono: { width: 80, height: 60 }
});
