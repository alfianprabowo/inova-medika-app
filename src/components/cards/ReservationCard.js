import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ReservationCard({ doctor, img, name, speciality, schedule }) {
    return (
        <TouchableOpacity style={styles.container}>

            <View style={styles.doctor}>

                <View style={styles.doctorImageContainer}>
                    {
                        img
                            ?
                            <Image style={styles.doctorImage} source={require('../../assets/images/logo.png')} />
                            // <Image style={styles.doctorImage} source={{ uri: img }} />
                            :
                            <Icon name="person" size={30} />
                    }
                </View>

                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>
                        Dr. Alfian Prabowo
                        {/* {name} */}
                    </Text>
                    <Text style={styles.doctorSpeciality}>
                        Dokter Umum
                        {/* {speciality} */}
                    </Text>
                </View>

            </View>

            <View style={styles.schedule}>

                <View style={styles.dateContainer}>
                    <Text style={styles.date}>
                        10 Agustus 23
                        {/* {schedule.date} */}
                    </Text>
                </View>

                <View style={styles.timeContainer}>
                    <Text style={styles.time}>
                        10:00 - 11:00
                        {/* {schedule.time} */}
                    </Text>
                </View>

            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    doctor: {
        flexDirection: "row",
    },
    doctorImageContainer: {
        // backgroundColor: 'grey',
        borderRadius: 4,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    doctorImage: {
        resizeMode: 'cover',
        height: 40,
        width: 40,
    },
    doctorInfo: {
        flex: 3,
        flexDirection: "column",
        marginLeft: 8,
    },
    doctorName: {
        fontSize: 14,
        fontWeight: "600",
    },
    doctorSpeciality: {
        fontSize: 12,
        color: 'gray',
        marginTop: 4,
    },
    schedule: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 8,
    },
    dateContainer: {
        backgroundColor: '#04CC89',
        borderRadius: 4,
        padding: 6,
    },
    date: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        fontWeight: "600"
    },
    timeContainer: {
        backgroundColor: '#479AFF',
        borderRadius: 4,
        padding: 6,
    },
    time: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        fontWeight: "600"
    }
})