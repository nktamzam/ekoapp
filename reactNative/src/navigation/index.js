import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RepoList from "../../RepoList";
import RepoDetail from "../../RepoDetail";

const AppNavigator = createStackNavigator(
  {
    Home: RepoList,
    Details: RepoDetail
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
