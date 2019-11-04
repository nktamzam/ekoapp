import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { listarAcciones, calcNivel } from "./src/store/actions";
import Cabecera from "./src/components/cabecera";

class ListaAcciones extends Component {
  componentDidMount() {
    this.props.listarAcciones();
    this.props.calcNivel();
  }
  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        this.props.navigation.navigate("Acción", { id: item.id });
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
        <Cabecera nivel={this.props.nivel} navigation={this.props.navigation} />
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
    nivel: state.userReducer.nivel
  };
};

const mapDispatchToProps = {
  listarAcciones,
  calcNivel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaAcciones);
