import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from './Screens/LoginScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useState } from 'react';

import 'expo-dev-menu';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';


const loadApplication = async () => {
  await Font.loadAsync({
    'DMMono-Regular': require('./assets/fonts/DMMono-Regular.ttf'),
  });
};

const Stack = createStackNavigator();
const MainTab = createBottomTabNavigator();

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

// export const AppNavigator = () => (
//   // <Stack.Navigator initialRouteName="Login">
//   <Stack.Navigator>
//     <Stack.Screen name="Register" component={RegistrationScreen}  options={{
//             headerShown: false,
//           }}/>
//      <Stack.Screen name="Login" component={LoginScreen} />
//   </Stack.Navigator>
// );

export const AppNavigator = () => (
  <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Create" component={CreatePostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen} />
      </MainTab.Navigator>
);
