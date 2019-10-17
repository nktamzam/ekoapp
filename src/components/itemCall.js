import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class ItemCall extends Component {
  render() {
    return (
      <View style={style.container}>
        <Image style={style.avatar} source={this.props.src} />
        <View>
          <Text style={style.nombre}>{this.props.nombre}</Text>
          <Text style={style.fecha}>{this.props.fecha}</Text>
        </View>
        <Image style={style.icono} source={this.props.modo} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: 120,
    borderBottomColor: "#666",
    borderBottomWidth: 1
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  icono: {
    margin: 10,
    width: 40,
    height: 40
  },
  nombre: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left"
  },
  fecha: {
    textAlign: "left",
    fontSize: 12
  }
});
