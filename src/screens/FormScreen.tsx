import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import PasswordInput from '../components/PasswordInput';
import TextInputConfigurable from '../components/TextInputConfigurable';
import CitiesDropdown from '../components/CitiesDropdown';
import {THEME} from '../theme';
import ImagePicker from '../components/ImagePicker';
import ImageViewArea from './../components/ImageViewArea';

export interface Image {
  path: string;
  filename?: string;
}

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [pickerValue, setPickerValue] = useState('Киев');

  const [focused, setFocused] = useState(false);

  const [images, setImages] = useState([] as Image[]);

  const handleFocus = useCallback(() => setFocused(true), [setFocused]);

  const handleBlur = useCallback(() => setFocused(false), [setFocused]);

  const imageDeleteHandler = useCallback(
    path => {
      let filtered = images.filter(img => img.path !== path);
      setImages(filtered);
    },
    [images],
  );

  return (
    <ScrollView
      contentContainerStyle={styles.view}
      keyboardShouldPersistTaps={true}>
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
        keyboardType={'numeric'}
        maxLength={18}
        caretHidden={phone.length === 1 || phone.length === 0 ? true : false}
        options={{
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

      <PasswordInput password={password} setPassword={setPassword} />

      <CitiesDropdown
        pickerValue={pickerValue}
        setPickerValue={setPickerValue}
      />

      <ImagePicker setImages={setImages} />

      {images.length ? (
        <ImageViewArea images={images} deleteHandler={imageDeleteHandler} />
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const outputImages = images.map(img => img.path);
          console.log(name, phone, email, password, pickerValue, outputImages);
        }}>
        <Text style={styles.text}>Submit</Text>
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
    justifyContent: 'center',
    backgroundColor: THEME.BLUE_COLOR,
    width: 160,
    height: 50,
    padding: 10,
    borderRadius: 4,
    margin: 20,
    alignSelf: 'flex-end',
  },
  text: {
    color: 'white',
  },
});

export default Form;
