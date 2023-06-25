import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function PrimaryButton({ onPress, text }) {
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
        backgroundColor: "#04CC89",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    textStyle: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: 600,
    }
});