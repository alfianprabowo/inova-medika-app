import { StyleSheet, Text, View } from "react-native";
import TextConst from "../../utils/consts/TextConst";
import CustomDropdown from '../../components/dropdowns/CustomDropdown'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import TextButton from '../../components/buttons/TextButton'
import CustomTextInput from "../../components/CustomTextInput";

export default function ReservationPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>{TextConst.CLINIC_SPECIALITIES}</Text>
            <View style={styles.select}>
                <CustomDropdown data={specialities} type={TextConst.CLINIC_SPECIALITIES} />
            </View>

            <Text>{TextConst.DOCTOR}</Text>
            <View style={styles.select}>
                <CustomDropdown data={doctors} type={TextConst.DOCTOR} />
            </View>

            <Text>{TextConst.DATE}</Text>
            <View style={styles.date}>
                <TextButton text={TextConst.CHOOSE_DATE} />
            </View>

            <Text>{TextConst.NOTES}</Text>
            <CustomTextInput multiline={true} numberOfLines={4} />

            <PrimaryButton text={TextConst.CREATE_RESERVATION} onPress={() => { }} />

            <TextButton text={TextConst.CANCEL} onPress={() => navigation.goBack()}>
            </TextButton>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    select: {
        marginTop: 8,
        marginBottom: 16,
    },
    date: {
        width: "40%",
        marginBottom: 16,
    }
});

const specialities = [
    'Anak',
    'Gigi',
    'Hati',
    'Penyakit Dalam',
    'Syaraf',
]

const doctors = [
    'Alfian',
    'Prabowo',
    'Ari',
    'Retta',
]

