import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import PasswordInput from './PasswordInput';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordInputProps = {
    password,
    setPassword,
  };

  return (
    <ScrollView style={styles.view}>
      <TextInput
        placeholder="ФИО"
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
        caretHidden={true}
      />
      <TextInputMask
        placeholder="Телефон"
        style={styles.textInput}
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
      />
      <TextInput
        placeholder="Почта"
        style={styles.textInput}
        caretHidden={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <PasswordInput {...passwordInputProps} />

      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 60,
  },
  textInput: {
    borderWidth: 1,
    textAlign: 'center',
    borderColor: 'grey',
    margin: 10,
    marginHorizontal: 40,
    borderRadius: 4,
    padding: 10,
  },
});

export default Form;
