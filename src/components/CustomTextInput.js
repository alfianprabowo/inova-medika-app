import { StyleSheet, TextInput } from "react-native";

export default function CustomTextInput({ multiline, numberOfLines }) {
    return (
        <TextInput style={styles.input} multiline={multiline ? true : false} numberOfLines={numberOfLines}>


        </TextInput>
    )
};

const styles = StyleSheet.create({
    input: {
        // height: 48,
        minHeight: 40,
        marginTop: 4,
        marginBottom: 16,
        borderColor: "#04CC89",
        borderWidth: 1,
        borderRadius: 10,

    }
});