import {StyleSheet, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';
import {THEME} from '../theme';

interface TextInputConfigurableProps {
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
}

const TextInputConfigurable = ({
  placeholder,
  value,
  setValue,
}: TextInputConfigurableProps) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => setFocused(true), [setFocused]);

  const handleBlur = useCallback(() => setFocused(false), [setFocused]);
  return (
    <TextInput
      autoCapitalize={'words'}
      caretHidden={value.length === 1 || value.length === 0 ? true : false}
      placeholder={placeholder}
      style={[
        styles.textInput,
        {
          borderColor: focused ? THEME.BLUE_COLOR : THEME.GREY_COLOR,
        },
      ]}
      value={value}
      onChangeText={text => {
        setValue(text);
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    textAlign: 'center',
    borderColor: THEME.GREY_COLOR,
    margin: 10,
    marginHorizontal: 40,
    borderRadius: 4,
    padding: 10,
  },
});

export default TextInputConfigurable;
