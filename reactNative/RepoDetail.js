import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { connect } from "react-redux";
import { getRepoDetail } from "./src/redux/actions";

class RepoDetail extends Component {
  static navigationOptions = {
    title: "RepoDetail"
  };
  componentDidMount() {
    const name = this.props.navigation.getParam("name");
    this.props.getRepoDetail("nktamzam", name);
  }
  render() {
    const { repoInfo, loadingInfo } = this.props;
    if (loadingInfo) return <Text>Loading...</Text>;

    const {
      name,
      full_name,
      description,
      forks_count,
      stargazers_count
    } = repoInfo;

    return (
      <View>
        <Text>{name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>Forks: {forks_count}</Text>
        <Text>Stars: {stargazers_count}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ repoInfo, loadingInfo }) => ({
  repoInfo,
  loadingInfo
});

const mapDispatchToProps = {
  getRepoDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
