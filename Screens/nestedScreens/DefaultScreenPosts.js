import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import db from "../../firebase/config";


const DefaultScreenPosts = ({route, navigation}) => {
  const [posts, setPosts] = useState([])

  const getAllPost = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };


  useEffect(() => {
    getAllPost();
  }, []);

  console.log('posts: ', posts)
  return (
    <View style={styles.container}>
    <FlatList data={posts} keyExtractor={(item, indx) => indx.toString()}
     renderItem={({ item }) => (
      <View
        style={{
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: item.photo }}
          style={{ width: 350, height: 200 }}
        />
      </View>
    )}
    />

<Button title="go to map" onPress={() => navigation.navigate("Map")} />
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

export default DefaultScreenPosts;
