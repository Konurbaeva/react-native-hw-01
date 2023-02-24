import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons,  AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="post-add" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen 
      options={{
        tabBarIcon: ({focused, size, color}) => (
            <AntDesign name="pluscircle" size={size} color={color} />
        )
      }}
      name="Create" component={CreatePostsScreen} />
      <MainTab.Screen options={{
        tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />
        )
      }} name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};