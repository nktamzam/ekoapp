import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Acciones from "../../Acciones";
import Accion from "../../Accion";
import NuevaAccion from "../../NuevaAccion";

const AppNavigator = createStackNavigator(
  {
    Home: Acciones,
    Acción: Accion,
    NuevaAcción: NuevaAccion
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
