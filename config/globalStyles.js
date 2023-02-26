import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageWhite: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  // imageRectangle: {
  //   // width: MAX_WIDTH,
  //   // height: MAX_HEIGHT,
  //   position: 'absolute',
  //   borderRadius: 6,

  //   // borderColor: colors.secondary,
  //   borderColor: "red",
  // },
  imageRectangle: {
    position: 'absolute',
  
    
  },
  imagePlusIcon: {
    width: 36,
    height: 28,
    alignItems:"center",
   // flexDirection: 'column',
   flexDirection: "row"
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    color: colors.black,
    borderColor: colors.grey,
  },
  form: {},
  inputTitle: {
    color: colors.black,
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FF6C00',
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: colors.secondary,
        backgroundColor: colors.third,
      },
      android: {
        backgroundColor: '#ffb6c1',
        borderColor: 'transparent',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
  buttonTitle: {
    fontStyle: 'normal',
    fontSize: 18,
  },
  header: {
    fontSize: 25,
    color: colors.black,
    alignItems: 'center',
    marginBottom: 150,
  },
  headerTitle: {
    fontSize: 30,
    color: colors.black,
    fontFamily: 'DMMono-Regular',
  },
  iconContainer: {
    padding: 10,
  },
});
