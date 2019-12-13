import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Completadas from "./completadas";
import Nivel from "./nivel";
import BotonVolver from "./botonVolver";
import BotonNueva from "./botonNueva";

export default class Cabecera extends Component {
  render() {
    return (
      <View style={style.container}>
        {this.props.volver && (
          <BotonVolver navigation={this.props.navigation} />
        )}
        {this.props.nueva && (
          <BotonNueva
            nivel={this.props.nivel}
            navigation={this.props.navigation}
            completadas={this.props.completadas}
            total={this.props.total}
            puntosTotal={this.props.puntosTotal}
          />
        )}
        <Completadas
          completadas={this.props.completadas}
          total={this.props.total}
        />
        <Nivel nivel={this.props.nivel} puntosTotal={this.props.puntosTotal} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    height: 80,
    backgroundColor: "#59A93B"
  }
});
