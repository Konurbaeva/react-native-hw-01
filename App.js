
import { StyleSheet, View, ImageBackground, TextInput, Text, Button} from 'react-native';
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
       <Button title='SIGN IN'/>
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
    marginHorizontal: 40
  },
  inputTitle: {
color: "#f0f8ff",
marginBottom:10,
fontSize:18
  }
});