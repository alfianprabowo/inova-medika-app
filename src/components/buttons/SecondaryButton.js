import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function SecondaryButton({ onPress, text }) {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        elevation: 8,
        backgroundColor: "#FFFFFF",
        borderColor: "#04CC89",
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid"
    },
    textStyle: {
        fontSize: 16,
        color: "#04CC89",
        fontWeight: 600,

    }
});