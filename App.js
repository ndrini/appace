// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import PlaceholderPage from './components/PlaceholderPage';
import Button from './components/Button';
import ButtonBack from './components/ButtonBack';
import MainImageViewer from './components/MainImageViewer';

import PageList from './components/PageList';

import stylesMain from './styles';
import { pages, constIcons } from './constants';
// import constants from './constants';

export default function App() {
  const [page, setPage] = useState("main")

  // const onPressToMain = () => { setPage(pages.main); }
  const onPressGoToPage = (pageName) => { setPage(pageName); }


  switch (page) {
    case "main":
      return (
        <View style={stylesMain.main}>

          <PlaceholderPage
            page={"main"}
          />

          <View>
            <MainImageViewer />
          </View>


          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <Button
                label="Map of Places (map)"
                iconType={"map-marker"}
                onPress={() => onPressGoToPage(pages.map)}
              />
              <Button
                label="Places of peace (list)"
                iconType={"list-ul"}
                onPress={() => onPressGoToPage(pages.list)}
              />
            </View>
            <View style={styles.optionsRow}>
              <Button
                label="Presentation"
                iconType={"search"}
                onPress={() => onPressGoToPage(pages.presentation)}
              />
              <Button
                label="Sources"
                iconType={"pencil"}
                onPress={() => onPressGoToPage(pages.sources)}
              />
              <Button
                label="Credits"
                iconType={"book"}
                onPress={() => onPressGoToPage(pages.credits)}
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
          <ButtonBack onPress={() => onPressGoToPage(pages.main)} />
        </View >
      );
    case "list":
      return (
        <View >
          <PlaceholderPage
            page={"list"}
          />
          {/* <PageList /> */}
          <ButtonBack onPress={() => onPressGoToPage(pages.main)} />

        </View >
      );
    case pages.presentation:
      return (
        <View >
          <PlaceholderPage
            page={pages.presentation}
          />

          <ButtonBack onPress={() => onPressGoToPage(pages.main)} />

        </View >
      );
    case pages.sources:
      return (
        <View>
          <PlaceholderPage
            page={pages.sources}
          />
          <ButtonBack onPress={() => onPressGoToPage(pages.main)} />

        </View>
      );
    case pages.credits:
      return (
        <View>
          <PlaceholderPage
            page={pages.credits}
          />
          <ButtonBack onPress={() => onPressGoToPage(pages.main)} />

        </View>
      );
    default:
      return (
        <View>
          <PlaceholderPage
            page={"NO ANY page STATE VALUE!!!"}
          />
          <ButtonBack onPress={() => onPressGoToPage(pages.main)} />
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
