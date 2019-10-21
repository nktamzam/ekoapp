import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getUser } from "./src/redux/actions";

class Profile extends Component {
  componentDidMount() {
    this.props.getUser("nktamzam");
  }

  render() {
    const { user, loadingProfile } = this.props;

    if (loadingProfile) return <Text>Loading...</Text>;

    const { name, login } = user;
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user, loadingProfile }) => ({
  user,
  loadingProfile
});

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
