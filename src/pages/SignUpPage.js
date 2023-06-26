import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import TextConst from "../utils/consts/TextConst"
import CustomTextInput from "../components/CustomTextInput"
import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"
import TitleText from "../components/Text/TitleText"
import RouteConst from "../utils/consts/RouteConst"
import LabelText from "../components/Text/LabelText"
import TextButton from "../components/buttons/TextButton"

export default function SignUpPage({ navigation }) {
    return (
        <SafeAreaView>

            <View style={styles.container}>
                <TitleText text={TextConst.SIGNUP}></TitleText>

                <LabelText text={TextConst.NAME}></LabelText>
                <CustomTextInput />

                <LabelText text={TextConst.PHONE}></LabelText>
                <CustomTextInput />

                <LabelText text={TextConst.EMAIL}></LabelText>
                <CustomTextInput />

                <Text>{TextConst.PASSWORD}</Text>
                <CustomTextInput />

                <PrimaryButton text={TextConst.CREATE_ACCOUNT} onPress={() => { }}>
                </PrimaryButton>

                <TextButton text={TextConst.CANCEL} onPress={() => navigation.goBack()}>
                </TextButton>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
});
