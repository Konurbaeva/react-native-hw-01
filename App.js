
import { StyleSheet, View, ImageBackground, TextInput, Text, TouchableOpacity} from 'react-native';
// import RegistrationScreen from "./Screens/RegistrationScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/PhotoBG.png")}
      >
       <View style={styles.form}> 
       <View>
        <Text style={styles.inputTitle}>Email address:</Text>
       <TextInput style={styles.input} textAlign={"center"} />
       </View>
       <View style={{marginTop: 20}}>
        <Text style={styles.inputTitle}>Password:</Text>
       <TextInput style={styles.input} textAlign={"center"} secureTextEntry={true} />
       </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
<Text style={styles.buttonTitle}>SIGN IN</Text>
      </TouchableOpacity>
       </View>
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
    justifyContent: "flex-end",
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
    marginHorizontal: 40
  },
  inputTitle: {
color: "#f0f8ff",
marginBottom:10,
fontSize:18
  },
  button: {
    backgroundColor: "#008000",
    height: 40,
    borderRadius:6,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonTitle: {
    fontStyle:"normal",
    fontSize:18
  }
});