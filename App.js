import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from './Screens/LoginScreen';
import * as Font from 'expo-font';

import { useState } from 'react';

import 'expo-dev-menu';


const loadApplication = async () => {
  await Font.loadAsync({
    'DMMono-Regular': require('../assets/fonts/DMMono-Regular.ttf'),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

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
