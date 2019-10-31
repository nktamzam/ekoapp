import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Co2 extends Component {
  render() {
    const imagenes = {
      3: require("../../assets/energia_3.png"),
      2: require("../../assets/energia_2.png"),
      1: require("../../assets/energia_1.png"),
      0: require("../../assets/energia_0.png")
    };

    return (
      <View style={style.container}>
        <Text style={{ color: "white" }}>- CO2</Text>
        <Image style={style.icono} source={imagenes[this.props.energia]} />
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
