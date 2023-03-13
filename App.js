// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import PlaceholderPage from './components/PlaceholderPage';
import Button from './components/Button';

let pCredits = "credits";


export default function App() {
  const [page, setPage] = useState("main")

  const onPressCredit = () => { setPage("credits"); }
  const onPressMap = () => { setPage("map"); }
  const onPressList = () => { setPage("list"); }
  const onPressMain = () => { setPage("main"); }


  switch (page) {
    case "main":
      return (
        <View>
          <PlaceholderPage
            page={"main"}
          />
          <Button
            label="map"
            iconType={"map-marker"}
            onPress={onPressMap}
          />
          <Button
            label="list"
            iconType={"list-ul"}
            onPress={onPressList}
          />
          <Button
            label="credit"
            iconType={"book"}
            onPress={onPressCredit}
          />

        </View>
      );
    case "credits":
      return (
        <View>
          <PlaceholderPage
            page={"credits"}
          />
          <Button
            label="main"
            iconType={"arrow-left"}
            onPress={onPressMain}
          />
        </View>
      );
    case "list":
      return (
        <View >
          <PlaceholderPage
            page={"list"}
          />

          <Button
            label="main"
            iconType={"back"}
            onPress={onPressMain}
          />
        </View >
      );
    default:
      return (
        <View>
          <PlaceholderPage
            page={"NO ANY page STATE VALUE!!!"}
          />
          <Button
            label="main"
            iconType={"back"}
            onPress={onPressMain}
          />
        </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
