import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';

const ProductDetails = ({header, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    fontFamily: typography.inter28Bold,
    fontSize: 20,
    color: colors.black,
    marginBottom: 8,
  },
  description: {
    fontFamily: typography.inter24Regular,
    fontSize: 16,
    color: colors.grayDark,
    lineHeight: 22,
  },
});
