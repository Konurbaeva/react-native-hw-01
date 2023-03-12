import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator()

const PostsScreen = () => {
return (
  <NestedScreen.Navigator>
  <NestedScreen.Screen
         name="DefaultScreen"
         component={DefaultScreenPosts}
       />
       <NestedScreen.Screen name="Map" component={MapScreen} />
  </NestedScreen.Navigator>
)
}

export default PostsScreen;