import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { listRepos } from "./src/redux/actions";

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos("nktamzam");
  }
  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        this.props.navigation.navigate("Details", { name: item.name });
      }}
    >
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
  render() {
    const { repos } = this.props;
    return (
      <View>
        <FlatList
          styles={styles.container}
          data={repos}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));

  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
