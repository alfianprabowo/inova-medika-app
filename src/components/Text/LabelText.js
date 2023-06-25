import { StyleSheet, Text } from "react-native";

export default function LabelText({ text }) {
    return (
        <Text style={styles.text}>
            {text}
        </Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 300,
    },
});
