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
  Image,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { globalStyles } from '../config/globalStyles';


const initialState = {
  email: '',
  password: '',
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;

      setDimensions(width);
    };
    dimensionsHandler = Dimensions.addEventListener('change', onChange);

    return () => dimensionsHandler.remove();
  }, []);


  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={globalStyles.container}>
        <ImageBackground style={globalStyles.image} source={require('../assets/PhotoBG.png')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          
            <Image
              width={200}
              height={200}
              style={globalStyles.imageWhite}
              source={require('../assets/BG.png')}
            />
              <Image
              style={globalStyles.imageRectangle}
              source={require('../assets/Rectangle.png')}
            />
            <Image
              style={globalStyles.imagePlusIcon}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />
            <View
              style={{
                ...globalStyles.form,
                marginBottom: isShowKeyboard ? 20 : 150,
                width: dimensions,
              }}
            >
              <View style={globalStyles.header}>
                <Text style={globalStyles.headerTitle}>Регистрация</Text>
              </View>
              <View>
                <Text style={globalStyles.inputTitle} onFocus={() => setIsShowKeyboard(true)}>
                  Email address:
                </Text>
                <TextInput
                  style={globalStyles.input}
                  textAlign={'center'}
                  placeholder="Адрес электронной почты"
                  value={state.email}
                  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={globalStyles.inputTitle}>Password:</Text>
                <TextInput
                  style={globalStyles.input}
                  textAlign={'center'}
                  secureTextEntry={!showPassword}
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholder="Пароль"
                  value={state.password}
                  onChangeText={value => setState(prevState => ({ ...prevState, password: value }))}
                />
                <TouchableOpacity onPress={toggleShowPassword} style={globalStyles.iconContainer}>
                  <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={globalStyles.button}
                onPress={() => setIsShowKeyboard(false)}
              >
                <Text style={globalStyles.buttonTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>

              <Button
                title="Уже есть аккаунт? Войти"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
