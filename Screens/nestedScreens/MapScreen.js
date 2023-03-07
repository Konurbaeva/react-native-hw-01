import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => (
  <View style={styles.container}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{ longitude: 51.49, latitude: 10.14, longitudeDelta: 0.1, latitudeDelta: 0.1 }}
    >
      <Marker coordinate={{ latitude: 50.516339, longitude: 30.602185 }} title="travel photo" />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;

// import React from "react"
// import { View, Text, StyleSheet} from "react-native"


// const ProfileScreen = () => {
//     return <View style={styles.container}><Text>ProfileScreen</Text></View>
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//   });

// export default ProfileScreen;
