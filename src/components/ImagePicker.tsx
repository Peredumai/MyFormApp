import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import ImagePicker from 'react-native-image-crop-picker';
import {Image} from './../screens/FormScreen';

interface ImagePickerCompProps {
  setImages: (prevState: any) => Image[] | void;
}

export default function ImagePickerComp({setImages}: ImagePickerCompProps) {
  const openImagePicker = () => {
    let imageList: Image[] = [];

    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 5,
      mediaType: 'any',
      includeBase64: true,
    })
      .then(res => {
        res.map(img => {
          imageList.push({
            filename: img.filename,
            path: img.path,
          });
        });
        setImages((prevState: Image[]) => {
          const output = prevState.concat(imageList).slice(0, 5);
          return output;
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <TouchableOpacity style={styles.view} onPress={openImagePicker}>
      <Text style={styles.text}>Добавить фото</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#B0C4DE',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
  },
});
