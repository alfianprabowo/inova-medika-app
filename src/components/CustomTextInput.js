import { StyleSheet, TextInput } from "react-native";

export default function CustomTextInput(params) {
    return (
        <TextInput style={styles.input}>


        </TextInput>
    )
};

const styles = StyleSheet.create({
    input: {
        // borderBottomWidth: 0.5,
        height: 48,
        // borderBottomColor: "#8e93a1",
        marginTop: 4,
        marginBottom: 24,
        borderColor: "#04CC89",
        borderWidth: 1,
        borderRadius: 10,
    }
});