import { StyleSheet, Text, View } from "react-native"
import TextConst from "../utils/consts/TextConst"
import CustomTextInput from "../components/CustomTextInput"
import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"
import TitleText from "../components/Text/TitleText"
import RouteConst from "../utils/consts/RouteConst"

export default function LoginPage({ navigation }) {
    return (
        <View style={styles.container}>
            <TitleText text={TextConst.LOGIN}></TitleText>

            <Text>{TextConst.EMAIL}</Text>
            <CustomTextInput />

            <Text>{TextConst.PASSWORD}</Text>
            <CustomTextInput />

            <PrimaryButton text={TextConst.LOGIN} onPress={{}}>
            </PrimaryButton>

            <SecondaryButton text={TextConst.REGISTER} onPress={() => navigation.navigate(RouteConst.SIGNUP)}>
            </SecondaryButton>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    text: {
        fontSize: 20,
    },
});