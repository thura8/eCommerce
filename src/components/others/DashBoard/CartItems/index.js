import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import {formattedMoney} from '@helper/index';

const CartItems = ({product}) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={product.imgURL}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>

        <View style={styles.quantityContainer}>
          <ButtonInput
            icon={require('@assets/icons/minus.png')}
            btnCtnStyle={styles.quantityButton}
            imgStyle={styles.icon}
          />
          <Text style={styles.quantityText}>2</Text>
          <ButtonInput
            icon={require('@assets/icons/plus.png')}
            btnCtnStyle={styles.quantityButton}
            imgStyle={styles.icon}
          />
        </View>

        <Text style={styles.productPrice}>{formattedMoney(product.price)}</Text>
      </View>

      <ButtonInput
        icon={require('@assets/icons/cross.png')}
        imgStyle={styles.crossIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    borderRadius: 16,
    padding: 12,
    backgroundColor: colors.bgCart,
    shadowColor: colors.black,
    shadowOffset: {width: 3, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 91,
    height: 144,
    borderRadius: 8,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    width: 170,
    fontFamily: typography.inter24Regular,
    fontSize: 16,
    color: colors.black,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    color: colors.black,
  },
  productPrice: {
    fontFamily: typography.fontRegular,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
  },
  quantityButton: {
    padding: 6,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  crossIcon: {
    width: 28,
    height: 28,
  },
});

export default CartItems;
