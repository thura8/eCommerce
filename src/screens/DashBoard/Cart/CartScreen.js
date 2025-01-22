import React, {useState} from 'react';
import ContainerLayout from '@components/common/ContainerLayout';

import {savedProducts} from '@constants/common';
import CartItemList from '@components/others/DashBoard/CartItemList';
import {formattedMoney} from '@helper/index';
import NoSavedPages from '@components/common/NoSavedItems';
import cartIcon from '@assets/icons/cart.png';

const CartScreen = () => {
  const [showCartItems, setShowCartItems] = useState(true);

  const handleCheckOut = () => {
    console.log('Total Price: $132,400.00');
  };

  const totalPrice = formattedMoney(132400);

  return (
    <ContainerLayout
      headerTitle="Cart"
      totalPrice={totalPrice}
      onCheckout={handleCheckOut}
      showFooter={showCartItems}>
      {showCartItems ? (
        <CartItemList products={savedProducts} />
      ) : (
        <NoSavedPages
          icon={cartIcon}
          title="Your Cart is Empty!"
          subtitle="When you add products,they'll"
          description="appear here"
        />
      )}
    </ContainerLayout>
  );
};

export default CartScreen;
