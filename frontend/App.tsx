//React Native Stack is used here instead of stack,
//due it has better performance for Android and iOS
//according to Co-pilot.

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AudioConfigs from "./components/AudioConfigs";
import Settings from "./components/Settings";
import { RootStackParamList } from "./components/types";
import mainMenu from "./scenes/mainMenu";
import scene02 from "./scenes/scene02";
import scene03 from "./scenes/scene03";
import scene04 from "./scenes/scene04";
import scene05 from "./scenes/scene05";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="mainMenu">
        <Stack.Screen
          name="mainMenu"
          component={mainMenu}
        />
        <Stack.Screen
          name="scene02"
          component={scene02}
        />
        <Stack.Screen
          name="scene03"
          component={scene03}
        />
        <Stack.Screen
          name="scene04"
          component={scene04}
        />
        <Stack.Screen
          name="scene05"
          component={scene05}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />

        <Stack.Screen
          name="AudioConfigs"
          component={AudioConfigs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


