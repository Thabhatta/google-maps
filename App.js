import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.499796,
          longitude: -46.812634,
          latitudeDelta: 0.0125,
          longitudeDelta: 0.0125,
        }}
      >
        <Marker 
          coordinate={{
            latitude: -23.499796,
            longitude: -46.812634,
          }}
          description="Avenida Diretriz, 422 - Jardim Mutinga - Barueri"
          title="Lar Doce Lar"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
