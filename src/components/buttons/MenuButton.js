import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function MenuButton({ iconName, text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <View styles={styles.icon}>
                    <Icon name={iconName} size={30} color='#04CC89' />
                </View>

                <View styles={styles.text}>
                    <Text style={styles.text}> {text}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 8,
        height: 80,
        width: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
    },
    icon: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 12,
        textAlign: "center"
    }
});