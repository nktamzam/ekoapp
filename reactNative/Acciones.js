import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { getAcciones } from "./src/store/actions";
import Cabecera from "./src/components/cabecera";

class ListaAcciones extends Component {
  componentDidMount() {
    this.props.getAcciones();
  }

  puntosTotal = () => {
    // sumamos (resisduos + energia + dificultad) de cada acción y devolvemos array suma2
    const suma = this.props.acciones.map(
      x => parseInt(x.residuos) + parseInt(x.energia) + parseInt(x.dificultad)
    );
    // sumamos y devolvemos las sumas de cada acción
    return suma.reduce((a, b) => a + b, 0);
  };

  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        this.props.navigation.navigate("Acción", {
          id: item.id,
          total: Object.keys(this.props.acciones).length,
          puntosTotal: this.puntosTotal()
        });
      }}
    >
      <View style={styles.item}>
        <Text style={{ color: "white" }}>{item.titulo}</Text>
        <Text style={{ color: "white" }}>{item.texto}</Text>
      </View>
    </TouchableHighlight>
  );
  render() {
    const { acciones } = this.props;

    return (
      <View style={styles.container}>
        <Cabecera
          nivel={this.props.nivel}
          navigation={this.props.navigation}
          completadas={this.props.completadas}
          total={Object.keys(acciones).length}
          puntosTotal={this.puntosTotal()}
        />

        <FlatList
          styles={styles.container}
          data={acciones}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let lista = state.apiReducer.acciones.map(accion => ({
    key: accion.id,
    ...accion
  }));

  return {
    acciones: lista,
    loading: state.apiReducer.loading,
    nivel: state.localReducer.nivel,
    completadas: state.localReducer.completadas
  };
};

const mapDispatchToProps = {
  getAcciones
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaAcciones);
