/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface PasswordInputProps {
  password: string;
  setPassword: (text: string) => void;
}

const PasswordInput = ({password, setPassword}: PasswordInputProps) => {
  const [hidePass, setHidePass] = useState(true);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);

  const handleBlur = () => setFocused(false);

  return (
    <>
      <View style={styles.searchSection}>
        <TextInput
          style={[
            styles.textInput,
            {
              borderColor: focused ? 'skyblue' : 'grey',
            },
          ]}
          placeholder={'Пароль'}
          secureTextEntry={hidePass ? true : false}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          caretHidden={true}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Icon
          name={hidePass ? 'eye-slash' : 'eye'}
          size={20}
          style={styles.searchIcon}
          color="grey"
          onPress={() => setHidePass(!hidePass)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    margin: 10,
    marginHorizontal: 40,
    borderRadius: 4,
    padding: 10,
    borderColor: 'grey',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
    position: 'absolute',
    right: 50,
  },
});

export default PasswordInput;
