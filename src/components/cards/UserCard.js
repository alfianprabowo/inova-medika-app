import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserCard({ user, onpress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onpress}>
            <Text style={styles.name}>
                {/* {user.name} */}
                Alfian Prabowo
            </Text>

            <Text style={styles.phone}>
                {/* {user.phone} */}
                081234567890
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 80,
        padding: 16,
    },
    name: {
        fontSize: 16,
    },
    phone: {
        fontSize: 12,
        marginTop: 4,
    },
})