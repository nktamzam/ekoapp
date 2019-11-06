import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { calcNivel } from "./src/store/actions";
import { getAcciones } from "./src/store/actions";
import Cabecera from "./src/components/cabecera";

class ListaAcciones extends Component {
  componentDidMount() {
    this.props.getAcciones();
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
        <Cabecera
          nivel={this.props.nivel}
          navigation={this.props.navigation}
          completadas={this.props.completadas}
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
    nivel: state.userReducer.nivel,
    completadas: state.userReducer.completadas
  };
};

const mapDispatchToProps = {
  getAcciones,
  calcNivel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaAcciones);
