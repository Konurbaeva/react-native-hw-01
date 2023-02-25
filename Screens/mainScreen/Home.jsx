import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Home</Text>
//     </View>
//   );
// };

//
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Button title="Go to Posts" onPress={() => navigation.navigate('PostsScreen')} />

      </TouchableOpacity>
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

export default Home;
