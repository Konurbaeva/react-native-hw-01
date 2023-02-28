import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePostsScreen from './CreatePostsScreen';
import PostsScreen from './PostsScreen';

const MainTab = createBottomTabNavigator();

function Home() {
  return (
        <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen}></MainTab.Screen>
        </MainTab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
