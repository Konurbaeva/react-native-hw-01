import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostsScreen = ({route}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(prevState => [...prevState, route.params.photo])
   
  }, [route.params]);

  //console.log("route.params: ", route.params)
  console.log('posts: ', posts)
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostsScreen;
