import React from 'react';
import {
    View,
    Button,
    ImageBackground,
    TextInput,
    Text,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Image
  } from "react-native";

  import { globalStyles } from '../config/globalStyles';


  export default function LoginScreen({navigation}) {
    return (
        <View style={ globalStyles.container}>    
         <Text> Login Screen</Text>
         <Button
        title="Нет аккаунта? Зарегистрироваться"
        onPress={() => navigation.navigate('Register')}
      
      />
        </View>
      );
  }