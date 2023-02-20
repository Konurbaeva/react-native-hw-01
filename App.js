import {
  StyleSheet,
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
// import RegistrationScreen from "./Screens/RegistrationScreen"
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from 'expo-app-loading';

const initialState = {
  email: '',
  password:''
}

const loadApplication = async() => {
  await Font.loadAsync({
    'DMMono-Regular': require('./assets/fonts/DMMono-Regular.ttf')
  })
}


export default function App() {
const [isShowKeyboard, setIsShowKeyboard] = useState(false)
const [state, setState] = useState(initialState)
const [isReady, setIsReady] = useState(false)

const [dimensions, setDimensions] = useState(Dimensions.get("window").width-20*2)

 const keyboardHide = () => {
  setIsShowKeyboard(false)
  Keyboard.dismiss()
  console.log(state)
  setState(initialState)
 }

 useEffect(() => {
 const onChange= () => {
  const width = Dimensions.get("window").width
  setDimensions(width)
 }
 dimensionsHandler = Dimensions.addEventListener('change', onChange)

return ()=> dimensionsHandler.remove()
 }, [])

 if (!isReady) {
  return (
    <AppLoading
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
}
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
     
      <ImageBackground
        style={styles.image}
        source={require("./assets/PhotoBG.png")}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Image  style={styles.imageRectangle} source={require("./assets/Rectangle.png")}/>
         <Image width={200} height={200} style={styles.imageWhite} source={require("./assets/BG.png")}/>
         <Image
         style={styles.imagePlusIcon} 
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
        <View style={{...styles.form, marginBottom: isShowKeyboard? 20 : 100, width: dimensions}}>
          <View style={styles.header}> 
          <Text style={styles.headerTitle}>Регистрация</Text>
          </View>
          <View>
            <Text style={styles.inputTitle} 
            onFocus={() => setIsShowKeyboard(true)}
            >Email address:</Text>
            <TextInput style={styles.input} textAlign={"center"} 
             placeholder="Адрес электронной почты"
             value={state.email}
             onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              placeholder="Пароль"
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.button} 
          onPress={() => setIsShowKeyboard(false)}
          >
            <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
     
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    // flex: 1,
    // resizeMode: "cover",
    // // justifyContent: "flex-end",
    // justifyContent: "center",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageWhite: {
    flex: 1,
   position: 'absolute',
   justifyContent: "center"
  },
  imageRectangle: {
    position: 'absolute',
    borderRadius: 6,
    borderColor: "#f0f8ff"
  },
  imagePlusIcon: {
    width: 66,
    height: 58
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,
    marginHorizontal: 40,
    color: "#f0f8ff",
  },
  form: {
   // marginHorizontal: 40,
    marginBottom:100
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    background: '#FF6C00',
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff"
      },
      android: {
        backgroundColor:  "#ffb6c1",
        borderColor:  "transparent"
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),
  },
  buttonTitle: {
    fontStyle: "normal",
    fontSize: 18,
  },
  header: {
    fontSize: 25,
    color: "#212121",
    alignItems:"center",
    marginBottom:150
  }, 
  headerTitle: {
    fontSize: 30,
    color: "#f0f8ff",
    fontFamily: 'DMMono-Regular'
  }
});
