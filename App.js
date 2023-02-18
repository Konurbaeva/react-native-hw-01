
import { StyleSheet, View, ImageBackground, TextInput} from 'react-native';
// import RegistrationScreen from "./Screens/RegistrationScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/PhotoBG.png")}
      >
        <TextInput style={styles.input} textAlign={"center"} />
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
});