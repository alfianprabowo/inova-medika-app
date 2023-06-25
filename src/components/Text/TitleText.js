import { StyleSheet, Text } from "react-native";

export default function TitleText({ text }) {
    return (
        <Text style={styles.title}>
            {text}
        </Text>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 24,
    }
})