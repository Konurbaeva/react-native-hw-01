


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from './Screens/LoginScreen';

const Stack = createBottomTabNavigator();

export default function App() {

  return (
    <>
      {/* <RegistrationScreen /> */}
      <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
    </>
  );
}

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Register" component={RegistrationScreen} />
     <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
