// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import PlaceholderPage from './components/PlaceholderPage';

export default function App() {
  const [page, setPage] = useState("main")

  switch (page) {
    case "main":
      return (
          <PlaceholderPage
            page={"main"}
          />

      );
    case "credits":
      return (
        <PlaceholderPage
          page={"credits"}
        />
      );
    default:
      break;
        // code block
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
