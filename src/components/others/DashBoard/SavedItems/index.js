import {StyleSheet, View} from 'react-native';
import React from 'react';

import {savedProducts} from '@constants/common';

import ProductCard from '@components/common/ProductCard';

const SavedItems = () => {
  return (
    <View style={styles.container}>
      {savedProducts.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </View>
  );
};

export default SavedItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});
