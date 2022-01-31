import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RefereeScreen from "./src/screens/RefereeScreen";

const navigator = createStackNavigator( {
  Referee: RefereeScreen
}, {
  initialRouteName: 'Referee',
  defaultNavigationOptions: {
    title: "OddballSports",
    // headerTitleStyle: { fontFamily: 'LuckiestGuy_400Regular' }
  }
});

export default createAppContainer(navigator);
