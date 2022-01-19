import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

export default function ImageViewArea({images}) {
  return (
    <View style={styles.container}>
      {images.map(item => {
        return (
          <Image
            key={item.path}
            style={styles.stretch}
            source={{uri: item.path}}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: '20%',
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
});
