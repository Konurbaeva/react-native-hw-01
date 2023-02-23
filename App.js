import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from './Screens/LoginScreen';

import 'expo-dev-menu';

const Stack = createStackNavigator();

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
  // <Stack.Navigator initialRouteName="Login">
  <Stack.Navigator>
    <Stack.Screen name="Register" component={RegistrationScreen}/>
     <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
