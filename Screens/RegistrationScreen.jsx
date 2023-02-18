import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';


const RegistrationScreen =() => (
    <View style={styles.container}>
    <ImageBackground style={styles.image} source={require('../assets/PhotoBG.png')}>
     <TextInput style={styles.input}/>
    </ImageBackground>
  </View>
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff"
    },
    image: {
      flex: 1,
      resizeMode:"cover",
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
        borderWidth:1,
        borderColor:"#f0f8ff"
    }
  });
  

  export default RegistrationScreen;