import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { listarAcciones } from "./src/redux/actions";
import Cabecera from "./src/components/cabecera";

class ListaAcciones extends Component {
  componentDidMount() {
    this.props.listarAcciones();
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
        <Cabecera navigation={this.props.navigation} />
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
  let lista = state.acciones.map(accion => ({
    key: accion.id,
    ...accion
  }));

  return {
    acciones: lista
  };
};

const mapDispatchToProps = {
  listarAcciones
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaAcciones);
