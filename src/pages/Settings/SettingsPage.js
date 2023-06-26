import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import TextConst from "../../utils/consts/TextConst";
import UserCard from "../../components/cards/UserCard";
import LogoutButton from "../../components/buttons/LogoutButton";

export default function SettingsPage(params) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* <Text>{TextConst.SETTINGS}</Text> */}

                <UserCard onpress={() => { }} />

                <LogoutButton onPress={() => { }} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    }
});