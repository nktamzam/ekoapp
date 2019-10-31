import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Acciones from "../../Acciones";
import Accion from "../../Accion";

const AppNavigator = createStackNavigator(
  {
    Home: Acciones,
    Acción: Accion
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
