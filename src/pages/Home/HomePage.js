import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import MenuButton from "../../components/buttons/MenuButton"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteConst from "../../utils/consts/RouteConst";
import TextConst from "../../utils/consts/TextConst";
import LabelText from "../../components/Text/LabelText";
import ReservationCard from "../../components/cards/ReservationCard";

export default function HomePage({ userName, navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Halo, {userName}</Text>

                <MenuButton iconName='add' text='Daftar Reservasi' onPress={() => navigation.navigate(RouteConst.RESERVATION)} />

                <View style={styles.upcoming}>

                    <LabelText text={TextConst.UPCOMING_SCHEDULE} />
                </View>

                <ReservationCard />

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    text: {
        fontSize: 20,
        color: "#A5A5A5"
    },
    upcoming: {
        marginTop: 16,
        padding: 4,
    }
});
