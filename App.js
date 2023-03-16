// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import PlaceholderPage from './components/PlaceholderPage';
import Button from './components/Button';

import stylesMain from './styles';
import { pages, constIcons } from './constants';
// import constants from './constants';

let pCredits = "credits";


export default function App() {
  const [page, setPage] = useState("main")

  const onPressMap = () => { setPage(pages.map); }
  const onPressList = () => { setPage(pages.list); }
  const onPressPresentation = () => { setPage(pages.presentation); }
  const onPressSources = () => { setPage(pages.sources); }
  const onPressCredit = () => { setPage(pages.credits); }
  
  const onPressMain = () => { setPage(pages.main); }
  const onPressToPage = (pageName) => { setPage(pageName); }
  

  switch (page) {
    case "main":
      return (
        <View style={stylesMain.main}>
          <PlaceholderPage
            page={"main"}
          />
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <Button
                label="Map of Places (map)"
                iconType={"map-marker"}
                onPress={onPressMap}
              />
              <Button
                label="Places of peace (list)"
                iconType={"list-ul"}
                onPress={onPressList}
              />
            </View>
            <View style={styles.optionsRow}>
              <Button
                label="Presentation"
                iconType={"search"}
                onPress={onPressPresentation}
              />
              <Button
                label="Sources"
                iconType={"pencil"}
                onPress={onPressSources}
              />
              <Button
                label="Credits"
                iconType={"book"}
                onPress={onPressCredit}
              />
            </View>
          </View>
        </View>
      );
    case "map":
      return (
        <View >
          <PlaceholderPage
            page={"map"}
          />

          <Button
            label="main"
            iconType={"back"}
            onPress={onPressMain}
          />
        </View >
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
    case pages.presentation:
      return (
        <View >
          <PlaceholderPage
            page={pages.presentation}
          />

          <Button
            label="main"
            iconType={"back"}
            onPress={onPressMain}
          />
        </View >
      );
    case pages.sources:
      return (
        <View>
          <PlaceholderPage
            page={pages.sources}
          />
          <Button
            label="main"
            iconType={constIcons.backToMain}
            onPress={onPressMain}
          />
        </View>
      );
      case pages.credits:
        return (
          <View>
            <PlaceholderPage
              page={pages.credits}
            />
            <Button
              label="main"
              iconType={constIcons.backToMain}
              onPress={onPressMain}
            />
          </View>
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
