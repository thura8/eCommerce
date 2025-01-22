import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ContainerLayout from '@components/common/ContainerLayout';
import FastImage from 'react-native-fast-image';
import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import ProductDetails from '@components/others/DashBoard/ProductDetails';

const ProductScreen = () => {
  const product = {
    image: require('@assets/images/chair.jpg'),
    title: 'Brown Chair',
    price: '$20,000',
    rating: {value: 4.8, reviews: 40},
    details:
      'A stylish and comfortable brown leather chair, perfect for living rooms, offices, or reading corners. Its sleek design and high-quality material add a touch of sophistication to any space.',
  };

  return (
    <ContainerLayout headerTitle="Product">
      <View style={styles.container}>
        <FastImage
          source={product.image}
          style={styles.productImage}
          resizeMode="cover"
        />
        <ButtonInput
          btnCtnStyle={styles.favoriteIcon}
          icon={require('@assets/icons/black_heart.png')}
          imgStyle={styles.iconSize}
        />
        <Text style={styles.productTitle}>{product.title}</Text>
        <View style={styles.priceAndRating}>
          <Text style={styles.priceText}>{product.price}</Text>
          <View style={styles.ratingContainer}>
            <FastImage
              source={require('@assets/icons/rating.png')}
              style={styles.iconSize}
            />
            <Text style={styles.ratingText}>
              {product.rating.value} ({product.rating.reviews} Reviews)
            </Text>
          </View>
        </View>
        <ProductDetails
          header="Product Details"
          description={product.details}
        />
      </View>

      <ButtonInput
        btnCtnStyle={styles.addToCartButton}
        btnTxtStyle={styles.addToCartText}
        btnTxt="Add to Cart"
      />
    </ContainerLayout>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 340,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: colors.bgwhite,
    borderRadius: 8,
    padding: 8,
  },
  iconSize: {
    width: 32,
    height: 32,
  },
  productTitle: {
    fontFamily: typography.inter24Bold,
    fontSize: 24,
    color: colors.black,
    marginBottom: 8,
  },
  priceAndRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  priceText: {
    fontFamily: typography.inter28Regular,
    fontSize: 20,
    color: colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: typography.inter24Regular,
    fontSize: 16,
    color: colors.grayDark,
    marginLeft: 8,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 16,
  },
  addToCartText: {
    fontFamily: typography.inter24Regular,
    color: colors.bgwhite,
    fontSize: 18,
  },
});
