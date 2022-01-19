/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import PasswordInput from './PasswordInput';
import TextInputConfigurable from './TextInputConfigurable';
import CitiesDropdown from './CitiesDropdown';
import {THEME} from '../theme';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [pickerValue, setPickerValue] = useState('Киев');

  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => setFocused(true), [setFocused]);

  const handleBlur = useCallback(() => setFocused(false), [setFocused]);

  const passwordInputProps = {
    password,
    setPassword,
  };

  return (
    <ScrollView style={styles.view}>
      <TextInputConfigurable
        placeholder="ФИО"
        value={name}
        setValue={setName}
      />
      <TextInputMask
        placeholder="Телефон"
        style={[
          styles.textInput,
          {
            borderColor: focused ? THEME.BLUE_COLOR : THEME.GREY_COLOR,
          },
        ]}
        type={'cel-phone'}
        caretHidden={true}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(380) 99-999-99-99',
        }}
        value={phone}
        onChangeText={text => {
          setPhone(text);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <TextInputConfigurable
        placeholder="Почта"
        value={email}
        setValue={setEmail}
      />

      <PasswordInput {...passwordInputProps} />

      <CitiesDropdown
        pickerValue={pickerValue}
        setPickerValue={setPickerValue}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log(name, phone, email, password, pickerValue)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 60,
  },
  textInput: {
    borderWidth: 1,
    textAlign: 'center',
    borderColor: THEME.GREY_COLOR,
    margin: 10,
    marginHorizontal: 40,
    borderRadius: 4,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: THEME.BLUE_COLOR,
    width: 100,
    padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginRight: 50,
  },
});

export default Form;
