import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

export default class BotonVolver extends Component {
  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Image
            style={style.icono}
            source={require("../../assets/atras.png")}
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
