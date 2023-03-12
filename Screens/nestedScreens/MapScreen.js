import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => (
  <View style={styles.container}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{ longitude: 30.602185, latitude:  50.516339 , longitudeDelta: 0.1, latitudeDelta: 0.1 }}
    >
      <Marker coordinate={{ latitude:   30.602185, longitude: 50.516339 }} title="default longitude" />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
