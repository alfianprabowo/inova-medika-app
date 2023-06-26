import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomDropdown({ data, type, }) {
    return (
        <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            defaultButtonText={`Pilih ${type}`}
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
            searchPlaceHolder={`Cari ${type}`}
            searchPlaceHolderColor={'darkgrey'}
            renderSearchInputLeftIcon={() => {
                return <Icon name={'search'} color={'#444'} size={18} />;
            }}
        />
    )
};

const styles = StyleSheet.create({
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
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5'
    },
    dropdown1RowTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },
    dropdown1SelectedRowStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
})