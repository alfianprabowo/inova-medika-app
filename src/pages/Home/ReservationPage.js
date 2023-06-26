import { StyleSheet, Text, View } from "react-native";
import TextConst from "../../utils/consts/TextConst";

export default function ReservationPage(params) {
    return (
        <View style={styles.container}>
            <Text>{TextConst.CHOOSE_BY}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    }
});