import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';

import ImagePicker from 'react-native-image-crop-picker';

interface ImagePickerCompProps {
  setImages: Dispatch<SetStateAction<never[]>>;
}

export default function ImagePickerComp({setImages}: ImagePickerCompProps) {
  const openImagePicker = () => {
    let imageList: [] = [];

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
        console.log('response', res);
        res.map(img => {
          imageList.push({
            filename: img.filename,
            path: img.path,
            data: img.data,
          });
        });
        setImages(prevState => {
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
      <Text style={{color: 'white'}}>Добавить фото</Text>
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
});
