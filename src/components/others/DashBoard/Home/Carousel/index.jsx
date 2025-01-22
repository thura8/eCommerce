import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {imagesSlide, Screen} from '@constants/common';
import FastImage from 'react-native-fast-image';

// Constants for image dimensions and spacing
const _imageWidth = Screen.width * 0.92;
const _imageHeight = _imageWidth * 0.3;
const _spacing = 12;

// Photo Component to render each image
const Photo = ({item}) => (
  <View style={styles.imageContainer}>
    <FastImage source={item.imgURL} resizeMode="cover" style={styles.image} />
  </View>
);

const CarouselBox = () => (
  <View style={styles.container}>
    <FlatList
      data={imagesSlide}
      keyExtractor={item => item.id.toString()}
      horizontal
      contentContainerStyle={styles.flatListContent}
      style={styles.flatList}
      snapToInterval={_imageWidth + _spacing}
      decelerationRate="fast"
      renderItem={({item}) => <Photo item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  flatListContent: {
    gap: _spacing,
  },
  flatList: {
    flexGrow: 0,
  },
  imageContainer: {
    width: _imageWidth,
    height: _imageHeight,
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    flex: 1,
  },
});

export default CarouselBox;
