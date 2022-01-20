import {arrOfUkrCities} from '../../utils/ukraineCities';
import {Picker} from '@react-native-picker/picker';

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {THEME} from '../theme';

interface CitiesDropdownProps {
  pickerValue: string;
  setPickerValue: (text: string) => void;
}

const CitiesDropdown = ({pickerValue, setPickerValue}: CitiesDropdownProps) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={pickerValue}
        onValueChange={itemValue => setPickerValue(itemValue)}>
        {arrOfUkrCities.map(item => (
          <Picker.Item label={item} value={item} key={item} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: THEME.GREY_COLOR,
    margin: 10,
    marginBottom: 20,
    marginHorizontal: 40,
    borderRadius: 4,
  },
  picker: {
    color: 'black',
  },
});

export default CitiesDropdown;
