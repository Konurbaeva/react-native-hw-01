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

import { useDispatch, useSelector } from 'react-redux';
import {authSignInUser, authSignOutUser} from "../redux/auth/authOperations"

import AppLoading from 'expo-app-loading';

import { globalStyles } from '../config/globalStyles';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);
  
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const dispatch = useDispatch();


  // const handleSubmit = () => {
  //   console.log('Submitted');
  //   setEmail('');
  //   setIsValid(false);
  //   setError(null);
  // };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log('login state: ', state);
    dispatch(authSignInUser(state))
    setState(initialState);
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
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
              style={globalStyles.imageRectangle}
              source={require('../assets/Rectangle.png')}
            />
            <Image
              width={200}
              height={200}
              style={globalStyles.imageWhite}
              source={require('../assets/BG.png')}
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
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimensions,
              }}
            >
              <View style={globalStyles.header}>
                <Text style={globalStyles.headerTitle}>Войти</Text>
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
                  // value={email}
                 
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
                // onPress={() => setIsShowKeyboard(false)}
                onPress={() => navigation.navigate('Home')}
                disabled={!isValid}
              >
                {/* <Text style={globalStyles.buttonTitle}>Войти</Text> */}

                {error && <Text style={globalStyles.error}>{error}</Text>}
                {/* <Button title="Войти" onPress={handleSubmit} disabled={!isValid} /> */}
                <Button title="Войти" onPress={keyboardHide} disabled={!isValid} />
                
              </TouchableOpacity>

              <Button
                title="Нет аккаунта? Зарегистрироваться"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}