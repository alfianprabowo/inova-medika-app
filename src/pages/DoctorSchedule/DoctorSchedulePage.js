import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TextConst from "../../utils/consts/TextConst";
import DoctorCard from "../../components/cards/DoctorCard";
import CustomDropdown from "../../components/dropdowns/CustomDropdown";

export default function DoctorSchedulePage(params) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <Text>
                        {TextConst.DOCTOR_SCHEDULE}
                    </Text>

                    <View style={styles.filter}>
                        <CustomDropdown
                            data={specialities}
                            type={TextConst.SPECIALITY}
                        />

                    </View>

                    <DoctorCard />


                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    filter: {
        marginVertical: 16,
    },
});

const specialities = [
    'Anak',
    'Gigi',
    'Hati',
    'Penyakit Dalam',
    'Syaraf',
]