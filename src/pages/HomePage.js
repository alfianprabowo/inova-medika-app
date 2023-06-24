import { StyleSheet, View, Text } from "react-native";
import SettingsCard from "../components/SettingsCard";

export default function HomePage(params) {
    return (
        <View>
            <Text style={styles.text}>Halo</Text>
            {/* <SettingsCard
                iconName='person-circle'
                setting='Profile' /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    },
});
