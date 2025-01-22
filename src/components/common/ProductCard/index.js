import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import rating from '@assets/icons/rating.png';
import favorites from '@assets/icons/favorites.png';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import {formattedMoney} from '@helper/index';
import ButtonInput from '../ButtonInput';

const ProductCard = ({product}) => {
  return (
    <TouchableOpacity style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          source={product.imgURL}
          style={styles.productImage}
          resizeMode="cover"
        />

        <ButtonInput
          btnCtnStyle={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: colors.bgwhite,
            borderRadius: 16,
            padding: 5,
            shadowColor: colors.black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
          icon={favorites}
          imgStyle={{
            width: 20,
            height: 20,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{formattedMoney(product.price)}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <FastImage source={rating} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productContainer: {
    width: 170,
    backgroundColor: colors.bgwhite,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 170,
  },

  textContainer: {
    padding: 12,
  },
  productName: {
    fontFamily: typography.fontMedium,
    fontSize: 16,
    color: colors.black,
    marginBottom: 8,
  },
  priceContainer: {
    backgroundColor: colors.primaryLight,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  priceText: {
    fontFamily: typography.fontBold,
    fontSize: 14,
    color: colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  ratingText: {
    fontFamily: typography.fontMedium,
    fontSize: 14,
    color: colors.black,
  },
});
