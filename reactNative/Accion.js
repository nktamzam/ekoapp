import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getAccion } from "./src/redux/actions";
import Pie from "./src/components/pie";
import Cabecera from "./src/components/cabecera";

class Accion extends Component {
  static navigationOptions = {};
  componentDidMount() {
    const id = this.props.navigation.getParam("id");
    this.props.getAccion(id);
  }
  render() {
    const { accion, loadingInfo } = this.props;
    if (loadingInfo) return <Text>Cargando...</Text>;

    const { titulo, texto, energia, residuos, dificultad } = accion;

    return (
      <View style={style.container}>
        <Cabecera volver navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          <Text style={style.titulo}>{titulo}</Text>
          <Text style={style.texto}>{texto}</Text>
        </View>
        <Pie energia={energia} residuos={residuos} dificultad={dificultad} />
      </View>
    );
  }
}

const mapStateToProps = ({ accion, loadingInfo }) => ({
  accion,
  loadingInfo
});

const mapDispatchToProps = {
  getAccion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accion);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#333"
  },
  titulo: {
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "white"
  },
  texto: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: "white"
  }
});
