import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const places_list = [
        {lat: 45.40599461, lon: 11.87827146, title: "Tomba Antenore", description: "piazza Antenore" },
        {lat: "45.40275352", lon: "11.88246895", title: "Angelo Beolco", description: "Loggia e Edeo Cornao, Via Cesarott 37, Padova" },
        { lat: "45.4037635", lon: "	11.88170656", title: "Martini Sisters", description: "Via Galileo Galilei, 18, 35121 Padova PD, Italia" },
       { lat:  45.4012208729315, lon: 11.917703995112644, title: "XXIX Rosa Parks", description: "Gia Passerella"},
        { lat: "45.404722306970996", lon: "11.8599449606655", title: "Ezechiele Ramin", description: "Piazza san giuseppe 3 Padova" }

    ]

  return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: 45.4037,
              longitude: 11.8817,
              latitudeDelta: 0.03,
              longitudeDelta: 0.09,
          }}
        >

        <MapView.Marker
            coordinate={{latitude:  45.40122087293159, 
            longitude: 11.917703995112644 	}}
            title={"XXIX Rosa Parks"}
            description={"Gia Passerella "}
         />

                {places_list.map((place, index) => 
                   <MapView.Marker
            coordinate={{latitude: place.lat,
            longitude: place.lon}}
            title={place.title}
            description={place.description}
         />
                )}
      </MapView>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
});
