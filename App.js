import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from './Screens/LoginScreen';

const Stack = createBottomTabNavigator();

// const Stack = createStackNavigator();


export default function App() {

  return (
    <>
      <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
    </>
  );
}

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Register" component={RegistrationScreen}/>
     <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
