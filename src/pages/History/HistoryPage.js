import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import TextConst from "../../utils/consts/TextConst";

export default function HistoryPage(params) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>{TextConst.HISTORY}</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    }
});