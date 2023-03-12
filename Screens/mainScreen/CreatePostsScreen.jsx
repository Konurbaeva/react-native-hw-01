import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync()
    console.log('longitude: ', location.coords.longitude)
    console.log('latitude: ', location.coords.latitude)

    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    console.log('navigation ', navigation)
    navigation.navigate("DefaultScreen", { photo })
  }


  useEffect(() => {
    (async () => { 
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image source={{ uri: photo }} style={{ height: 200, width: 200, borderRadius: 10 }} />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <Text style={styles.snap}>Загрузите фото</Text>
        </TouchableOpacity>
      </Camera>
      <View>
      <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
      <Text style={styles.sendLabel}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 40
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    backgroundColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
   
    fontSize: 20,
  }
});

export default CreatePostsScreen;
