import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { sumaNivel, addAccion } from "./src/store/actions";
import { getAccion } from "./src/store/actions";
import Pie from "./src/components/pie";
import Cabecera from "./src/components/cabecera";
import { State } from "react-native-gesture-handler";

class Accion extends Component {
  static navigationOptions = {};
  componentDidMount() {
    // recogemos el id enviado con la navegación
    const id = this.props.navigation.getParam("id");
    // llamamos a la Apirest para que consulte
    this.props.getAccion(id);
  }
  render() {
    // destructuring: extraemos variables accion, loadingInfo the this props
    const { accion, loadingInfo } = this.props;
    if (loadingInfo) return <Text>Cargando...</Text>;

    // destructuring: extraemos las variables del objeto accion (este )
    const { titulo, texto, energia, residuos, dificultad } = accion;

    return (
      <View style={style.container}>
        <Cabecera
          volver
          nivel={this.props.nivel}
          navigation={this.props.navigation}
          completadas={this.props.completadas}
        />
        <View style={{ flex: 1 }}>
          <Text style={style.titulo}>{titulo}</Text>
          <Text style={style.texto}>{texto}</Text>
          <TouchableOpacity onPress={() => this.props.sumaNivel()}>
            <Image style={style.icono} source={require("./assets/atras.png")} />
          </TouchableOpacity>
        </View>
        <Pie energia={energia} residuos={residuos} dificultad={dificultad} />
      </View>
    );
  }
}

// el state (accion y loadinginfo) lo convertimos en props
const mapStateToProps = state => ({
  accion: state.apiReducer.accion,
  loadingInfo: state.apiReducer.loadingInfo,
  nivel: state.localReducer.nivel,
  completadas: state.localReducer.completadas
});

// la accion la convertimos en props
const mapDispatchToProps = {
  getAccion,
  sumaNivel,
  addAccion
};

// exportamos con el state y la acción cómo props
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
