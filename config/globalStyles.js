import {
    StyleSheet
  } from "react-native";

  // import colors from "../config/colors"
  import colors from "./colors"

  export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
     justifyContent: "flex-end",
      alignItems: "center",
    },
    // imageWhite: {
    //  flex: 1,
    //  position: 'absolute',
    //  justifyContent: "center"
    // },
    // imageRectangle: {
    //   position: 'absolute',
    //   borderRadius: 6,
    //   borderColor: colors.secondary
    // },
    // imagePlusIcon: {
    //   width: 36,
    //   height: 28
    // },
    input: {
      borderWidth: 1,
      borderRadius: 6,
      borderColor: colors.secondary,
      height: 40,
      color: colors.secondary,
    },
    form: {
    },
    inputTitle: {
      color: colors.secondary,
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
      background: "#FF6C00",
      ...Platform.select({
        ios: {
          backgroundColor: "transparent",
          borderColor: colors.secondary,
          backgroundColor: colors.third
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
      color: colors.secondary,
      fontFamily: 'DMMono-Regular'
    }
  });