import React from 'react';
import {View} from 'react-native';
import CartItems from '../CartItems';

const CartItemList = ({products}) => {
  return (
    <View>
      {products.map((product, index) => (
        <CartItems key={index} product={product} />
      ))}
    </View>
  );
};

export default CartItemList;
