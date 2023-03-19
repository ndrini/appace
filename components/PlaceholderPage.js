import { StyleSheet, View, Text } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";


const welcomeTexts = {
    it: 'Benvenuto!',
    en: 'Welcome!',
    es: '¡Bienvenido!',
    ca: 'Benvingut!',
  };

export default function PlaceholderPage({ page, language }) {
    return (
        <View style={styles.placeholderPage}>
            <Text> page {page}. Language is <b>{language}</b>: {welcomeTexts[language]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    placeholderPage: {
        color: '#fff',
        fontSize: 16
    },
});