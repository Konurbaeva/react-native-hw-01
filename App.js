
import RegistrationScreen from "./Screens/RegistrationScreen"

export default function App() {

  return (
    <>
      <RegistrationScreen />
    </>
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
