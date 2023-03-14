// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import PlaceholderPage from './components/PlaceholderPage';
import Button from './components/Button';

import stylesMain from './styles';
import {constIcons} from './constants';

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
        <View style={ stylesMain.main}>
          <PlaceholderPage
            page={"main"}
          />
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
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
          </View>
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
            iconType={constIcons.backToMain}
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'

  }
});
