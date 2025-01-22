import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import ButtonInput from '@components/common/ButtonInput';

const TotalPrice = ({total, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 14}}>
        <Text style={styles.label}>Total Price: </Text>
        <Text style={styles.price}>{total}</Text>
      </Text>
      <ButtonInput
        btnCtnStyle={styles.button}
        btnTxtStyle={styles.text}
        btnTxt="Checkout"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: colors.bgwhite,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopColor: colors.lightGray,
    borderRightColor: colors.lightGray,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },

  label: {
    fontFamily: typography.fontRegular,
    fontSize: 16,
  },
  price: {
    fontFamily: typography.fontBold,
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 24,
  },
  button: {
    width: 380,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 16,
  },

  text: {
    fontFamily: typography.inter24Regular,
    color: colors.bgwhite,
    fontSize: 20,
  },
});

export default TotalPrice;
