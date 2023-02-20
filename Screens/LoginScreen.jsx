import React from 'react';
import {
    View,
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

  export default function LoginScreen() {
    return (
        <View style={ globalStyles.container}>    
         <Text> Login Screen</Text>
        </View>
      );
  }