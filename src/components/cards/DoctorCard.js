import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function DoctorCard({ img, name, speciality, schedule, }) {
    return (

        <View style={styles.container}>

            <View style={styles.doctor}>

                <View style={styles.imageContainer}>
                    {
                        img
                            ?
                            <Image style={styles.doctorImage} source={require('../../assets/images/Profile.png')} />
                            // <Image style={styles.doctorImage} source={{ uri: img }} />
                            :
                            <Icon name="person" size={60} />
                    }
                </View>


                <View style={styles.infoContainer}>
                    <Text style={styles.name}>
                        Prof.dr. Abdul Aziz Rani, Sp.PD-KGEH
                        {/* {name} */}
                    </Text>

                    <Text style={styles.speciality}>
                        Penyakit Dalam/Internist - Konsultan Hati & Saluran Cerna
                        {/* {speciality} */}
                    </Text>
                </View>


            </View>

            {/* <View>
                {schedule.map((item) => {
                    return <Schedule day={item.day} time={item.time} />
                })}
            </View> */}

            <View >
                <Schedule day={'Senin'} time={'09:00 - 11:00'} />
                <Schedule day={'Rabu'} time={'10:00 - 12:00'} />
            </View>

        </View>
    )
};

const Schedule = ({ day, time, }) => {
    return (
        <View style={styles.schedule}>
            <Text style={styles.day}>
                {day}
            </Text>
            <Text style={styles.time}>
                {time}
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
    },
    doctor: {
        flexDirection: "row",
    },
    imageContainer: {
        height: 60,
        width: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doctorImage: {
        resizeMode: 'cover',
        height: 60,
        width: 60,
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 8,
    },
    name: {
        fontWeight: "600",
        color: "#04CC89"
    },
    speciality: {
        fontSize: 10,
        marginTop: 4,
    },
    schedule: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 8,
    },
    day: {
        fontSize: 12,
        fontWeight: '600'
    },
    time: {
        fontSize: 12,
        fontWeight: "400"
    }
})