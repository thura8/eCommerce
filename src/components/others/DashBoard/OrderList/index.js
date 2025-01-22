import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {savedProducts} from '@constants/common';
import FastImage from 'react-native-fast-image';
import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import {getButtonProps} from '@helper/index';

const OrderList = ({activeTabIndex}) => {
  const buttonProps = getButtonProps(activeTabIndex);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {savedProducts.map((product, index) => (
        <View key={index} style={[styles.productCard, {marginBottom: 16}]}>
          <FastImage source={product.imgURL} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </View>
          {activeTabIndex === 2 ? (
            <ButtonInput
              btnCtnStyle={styles.productButton}
              btnTxt={buttonProps.text}
              btnTxtStyle={{
                color: buttonProps.color,
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: typography.inter24Regular,
              }}
            />
          ) : (
            <Text
              style={[
                styles.productButton,
                {
                  color: buttonProps.color,
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: typography.inter24Regular,
                },
              ]}>
              {buttonProps.text}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgCart,
    borderRadius: 16,
    padding: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  productName: {
    fontFamily: typography.inter24Regular,
    color: colors.black,
    marginBottom: 4,
  },
  productPrice: {
    fontFamily: typography.inter28Regular,
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
});
