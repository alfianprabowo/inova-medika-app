import { StyleSheet, TextInput } from "react-native";

export default function CustomTextInput(params) {
    return (
        <TextInput style={styles.input}>


        </TextInput>
    )
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 24,
    }
});