import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from "react-native";
// import RegistrationScreen from "./Screens/RegistrationScreen"
import { useState } from "react";

export default function App() {
const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/PhotoBG.png")}
      >
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

    
        <View style={{...styles.form, marginBottom: isShowKeyboard? 20 : 100}}>
          <View>
            <Text style={styles.inputTitle} 
            onFocus={() => setIsShowKeyboard(true)}
            >Email address:</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "flex-end",
    justifyContent: "center",
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
    marginHorizontal: 40,
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
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
});
