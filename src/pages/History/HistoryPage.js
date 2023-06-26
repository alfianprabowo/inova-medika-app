import { StyleSheet, View, Text, SafeAreaView, useWindowDimensions } from "react-native";
import TextConst from "../../utils/consts/TextConst";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from "react";
import ReservationHistoryList from "../../containers/ReservationHistoryList";
import MedicalHistoryList from "../../containers/MedicalHistoryList";

const renderScene = SceneMap({
    first: ReservationHistoryList,
    second: MedicalHistoryList,
})

export default function HistoryPage(params) {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: TextConst.RESERVATION_HISTORY },
        { key: 'second', title: TextConst.MEDICAL_HISTORY },
    ]);

    return (

        <SafeAreaView>

            {/* <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            /> */}

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    }
});