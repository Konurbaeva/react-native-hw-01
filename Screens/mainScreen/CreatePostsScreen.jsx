import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

//import { db, storage } from "../../firebase/config"
import db from "../../firebase/config"

const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('')
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    setPhoto(uri);
    console.log("photo uri ", uri);
  };

  const sendPhoto = () => {
    uploadPhotoToServer();
    navigation.navigate("DefaultScreen", { photo });
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    const data = await db.storage().ref(`postImage/${uniquePostId}`).put(file);
    console.log("data", data);

    const processedPhoto = await db
    .storage()
    .ref("postImage")
    .child(uniquePostId)
    .getDownloadURL();

  console.log("processedPhoto", processedPhoto);
  };


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
      <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={setComment} />
        </View>
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
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "#20b2aa",
  },
});

export default CreatePostsScreen;
