import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ImageWrapperProps {
  path: string;
  deleteHandler: (path: string) => void;
}

export default function ImageWrapper({path, deleteHandler}: ImageWrapperProps) {
  return (
    <View>
      <Image key={path} style={styles.stretch} source={{uri: path}} />
      <Icon
        name={'times'}
        size={15}
        style={styles.closeIcon}
        color={'red'}
        onPress={() => deleteHandler(path)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    position: 'relative',
    marginHorizontal: 1,
  },
  closeIcon: {
    // padding: 10,
    position: 'absolute',
    right: 2,
    top: -2,
  },
});
