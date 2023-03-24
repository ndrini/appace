import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { WebView } from 'react-native-webview';

// import HTMLView from 'react-native-htmlview';

import { translations } from './assets/texts/translations';
import Cookies from 'universal-cookie';

import PlaceholderPage from './components/PlaceholderPage';
import Button from './components/Button';
import ButtonBack from './components/ButtonBack';
import MainImageViewer from './components/MainImageViewer';
// import handleLanguageChange from './src/HandleLanguageChange';
import PageList from './components/PageList';

import LanguageSelector from './components/LanguageSelector';
import { flags } from './components/flags';

import stylesMain from './styles';
import { pages, constIcons } from './constants';
// import constants from './constants';

const cookies = new Cookies();

// manage multilingual
function getTexts(language, key) {
  const lang = translations[language];
  return lang[key];
}

export default function App() {
  // set State
  const [page, setPage] = useState("main")
  const [language, setLanguage] = useState('it');
  // const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = cookies.get('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    cookies.set('language', newLanguage);
  };


  const htmlContent = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

  // const onPressToMain = () => { setPage(pages.main); }
  const onPressGoToPage = (pageName) => { setPage(pageName); }

  // simple routing like code 
  switch (page) {
    case "main":
      return (
        <View style={stylesMain.main}>

          <PlaceholderPage
            page={"main"}
            language={language}
          />

          <View>
            <MainImageViewer />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>{translations[language].welcomeMessage}</Text>
              <TouchableOpacity onPress={() => handleLanguageChange('en')}>
                <Text>{translations.en.languageButton}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguageChange('it')}>
                <Text>{translations.it.languageButton}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguageChange('es')}>
                <Text>{translations.es.languageButton}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLanguageChange('ca')}>
                <Text>{translations.ca.languageButton}</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View>
            <LanguageSelector
              languages={Object.values(flags)}
              currentLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
            <h1>{`Current language: ${language}`}</h1>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <Button
                label={getTexts(language, "MainMenuButtonTextMap")}
                iconType={"map-marker"}
                onPress={() => onPressGoToPage(pages.map)}
              />
              <Button
                label={getTexts(language, "MainMenuButtonTextList")}
                iconType={"list-ul"}
                onPress={() => onPressGoToPage(pages.list)}
              />
            </View>
            <View style={styles.optionsRow}>
              <Button
                label={getTexts(language, "MainMenuButtonTextPresentation")}
                iconType={"search"}
                onPress={() => onPressGoToPage(pages.presentation)}
              />
              <Button
                label={getTexts(language, "MainMenuButtonTextSources")}
                iconType={"pencil"}
                onPress={() => onPressGoToPage(pages.sources)}
              />
              <Button
                label={getTexts(language, "MainMenuButtonTextCredits")}
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

          <Text>
            <b>Questo testo è in grassetto</b>,
            <i>questo testo è in corsivo</i>, e <u>questo testo è sottolineato</u></Text>

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


          {/* <HTMLView
            value={htmlContent}
            stylesheet={styles}
          /> */}


          <Text> {getTexts(language, "PageTextPresentation")} </Text>

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

          <Text> the page txt {getTexts(language, "PageTextCredits")} and other staff </Text>
          <Text> the page txt {getTexts(language, "MainMenuButtonTextCredits")} and other staff </Text>
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
    bottom: 20
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    maxWidth: "90%"

  }
});
