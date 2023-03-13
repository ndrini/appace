import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Button({ 
    label, iconType, onPress 
}) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <FontAwesome
                        name= {iconType} //"picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                <Text style={styles.buttonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#f0f',
        fontSize: 16,
    },
});