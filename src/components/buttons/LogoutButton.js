import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import TextConst from "../../utils/consts/TextConst";
import Icon from "react-native-vector-icons/Octicons";

export default function LogoutButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>

            <View style={styles.iconText}>
                <Icon name="sign-out" color='#FF0000' size={20} ></Icon>
                <Text style={styles.textStyle}>
                    {TextConst.LOGOUT}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        elevation: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    iconText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 16,
        color: "#FF0000",
        fontWeight: 600,
        marginHorizontal: 10,

    }
});