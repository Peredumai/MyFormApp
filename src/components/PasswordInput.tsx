import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useCallback} from 'react';
import {THEME} from './../theme';

interface PasswordInputProps {
  password: string;
  setPassword: (text: string) => void;
}

const PasswordInput = ({password, setPassword}: PasswordInputProps) => {
  const [hidePass, setHidePass] = useState(true);
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => setFocused(true), [setFocused]);

  const handleBlur = useCallback(() => setFocused(false), [setFocused]);

  return (
    <View style={styles.searchSection}>
      <TextInput
        style={[
          styles.textInput,
          {
            borderColor: focused ? THEME.BLUE_COLOR : THEME.GREY_COLOR,
          },
        ]}
        placeholder={'Пароль'}
        secureTextEntry={hidePass ? true : false}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        caretHidden={
          password.length === 1 || password.length === 0 ? true : false
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Icon
        name={hidePass ? 'eye-slash' : 'eye'}
        size={20}
        style={styles.searchIcon}
        color={THEME.GREY_COLOR}
        onPress={() => {
          setHidePass(!hidePass);
        }}
      />
    </View>
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
    borderColor: THEME.GREY_COLOR,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 10,
    position: 'absolute',
    right: 50,
  },
});

export default PasswordInput;
