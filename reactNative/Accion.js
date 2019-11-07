import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { mePaso, meVuelvo } from "./src/store/actions";
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
    const { accion, loading } = this.props;
    if (loading) return <Text>Cargando...</Text>;

    // destructuring: extraemos las variables del objeto accion (este )
    const { id, titulo, texto, energia, residuos, dificultad } = accion;

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
          <Text style={style.texto}>
            {JSON.stringify(this.props.completadas)}
          </Text>

          {id in this.props.completadas ? (
            <TouchableOpacity onPress={() => this.props.meVuelvo(id)}>
              <Image style={style.icono} source={require("./assets/no.png")} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                this.props.mePaso(id, energia, residuos, dificultad)
              }
            >
              <Image style={style.icono} source={require("./assets/ok.png")} />
            </TouchableOpacity>
          )}
        </View>
        <Pie energia={energia} residuos={residuos} dificultad={dificultad} />
      </View>
    );
  }
}

// el state (accion y loadinginfo) lo convertimos en props
const mapStateToProps = state => ({
  accion: state.apiReducer.accion,
  loading: state.apiReducer.loading,
  nivel: state.localReducer.nivel,
  completadas: state.localReducer.completadas
});

// la accion la convertimos en props
const mapDispatchToProps = {
  getAccion,
  mePaso,
  meVuelvo
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
  },
  icono: { width: 50, height: 50, margin: 10 }
});
