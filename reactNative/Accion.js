import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getAccion } from "./src/redux/actions";
import Pie from "./src/components/pie";

class Accion extends Component {
  static navigationOptions = {
    title: "Acción"
  };
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
        <View>
          <Text style={style.titulo}>{titulo}</Text>
          <Text style={style.texto}>{texto}</Text>
        </View>
        <Pie
          energia={energia}
          residuos={residuos}
          dificultad={dificultad}
        ></Pie>
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
    justifyContent: "space-between"
  },
  titulo: {
    fontSize: 40,
    padding: 5
  },
  texto: {
    fontSize: 18,
    padding: 5
  }
});
