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

import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../store/slices/authSlice';

import { loginUser } from '../redux/store/slices/authSlice';

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
 //  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleEmailChange = inputText => {
    setEmail(inputText);

    // Regular expression for email validation
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setIsValid(regex.test(inputText));

    // Set error message if email is invalid
    if (!regex.test(inputText)) {
      setError('Please enter a valid email address.');
    } else {
      setError(null);
    }
  };

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(loginUser(credentials));
  };

  const handleSubmit = () => {
    console.log('Submitted');
    setEmail('');
    setIsValid(false);
    setError(null);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
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
                  //  value={state.email}
                  //  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  // value={email}
                  // onChangeText={handleEmailChange}
                  value={credentials.email}
                  onChangeText={(text) => setCredentials({ ...credentials, email: text })}
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
                onPress={() => navigation.navigate('Home')} disabled={!isValid}
              >
                {/* <Text style={globalStyles.buttonTitle}>Войти</Text> */}

                {error && <Text style={globalStyles.error}>{error}</Text>}
                <Button title="Войти" 
                //onPress={handleSubmit}
                onPress={handleLogin}
                disabled={!isValid}/>
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

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};