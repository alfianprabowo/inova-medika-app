import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TextConst from "../../utils/consts/TextConst";
import DoctorCard from "../../components/cards/DoctorCard";
import SelectDropdown from 'react-native-select-dropdown';
import Icon from "react-native-vector-icons/Ionicons";

export default function DoctorSchedulePage(params) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <Text>
                        {TextConst.DOCTOR_SCHEDULE}
                    </Text>

                    <View style={styles.filter}>
                        <SelectDropdown
                            data={specialities}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'Pilih Spesialis'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={styles.dropdownStyle}
                            buttonTextStyle={styles.dropdownTextStyle}
                            renderDropdownIcon={isOpened => {
                                return <Icon name={isOpened
                                    ? 'chevron-up'
                                    : 'chevron-down'} color={'#444'} size={18} />;
                            }}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            selectedRowStyle={styles.dropdown1SelectedRowStyle}
                            search
                            searchInputStyle={styles.dropdown1searchInputStyleStyle}
                            searchPlaceHolder={'Cari Spesialis'}
                            searchPlaceHolderColor={'darkgrey'}
                            renderSearchInputLeftIcon={() => {
                                return <Icon name={'search'} color={'#444'} size={18} />;
                            }}
                        >

                        </SelectDropdown>
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
    dropdownStyle: {
        width: '50%',
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdownTextStyle: {
        // color: '#444',
        fontSize: 12,
        textAlign: 'left',
    },
    dropdown1DropdownStyle: {
        backgroundColor: '#FFFFFF'
    },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5'
    },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
});

const specialities = [
    'Anak',
    'Gigi',
    'Hati',
    'Penyakit Dalam',
    'Syaraf',
]