import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native"
import TextConst from "../utils/consts/TextConst"
import CustomTextInput from "../components/CustomTextInput"
import PrimaryButton from "../components/buttons/PrimaryButton"
import SecondaryButton from "../components/buttons/SecondaryButton"
import TitleText from "../components/Text/TitleText"
import RouteConst from "../utils/consts/RouteConst"
import { useState, useContext } from "react"


export default function LoginPage({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TitleText text={TextConst.LOGIN}></TitleText>

                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image>
                </View>

                <Text>{TextConst.EMAIL}</Text>
                <CustomTextInput />

                <Text>{TextConst.PASSWORD}</Text>
                <CustomTextInput />

                <PrimaryButton text={TextConst.LOGIN}
                    onPress={() => { }}>
                </PrimaryButton>

                <SecondaryButton text={TextConst.REGISTER}
                    onPress={() => navigation.navigate(RouteConst.SIGNUP)}>
                </SecondaryButton>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        height: 150,
        width: 150,
    },
    text: {
        fontSize: 20,
    },
});