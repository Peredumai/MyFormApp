import {StyleSheet, View} from 'react-native';
import React from 'react';
import ImageWrapper from './ImageWrapper';
import {Image} from '../screens/FormScreen';

interface ImageViewAreaProps {
  images: Image[];
  deleteHandler: (path: string) => void;
}

export default function ImageViewArea({
  images,
  deleteHandler,
}: ImageViewAreaProps) {
  return (
    <View style={styles.container}>
      {images.map(item => {
        return (
          <ImageWrapper
            path={item.path}
            key={item.path}
            deleteHandler={deleteHandler}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    padding: 1,
  },
});
