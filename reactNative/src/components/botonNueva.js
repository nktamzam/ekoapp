import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

export default class BotonNueva extends Component {
  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("NuevaAcción", {
              total: this.props.total,
              puntosTotal: this.props.puntosTotal
            });
          }}
        >
          <Image
            style={style.icono}
            source={require("../../assets/nueva.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    marginTop: 30,
    marginLeft: 10
  },
  icono: { width: 40, height: 40 }
});
