import { StyleSheet, View, Text } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

export default function PlaceholderPage({ page }) {
    return (
        <View style={styles.placeholderPage}>
            <Text> page {page} </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    placeholderPage: {
        color: '#fff',
        fontSize: 16
    },
});