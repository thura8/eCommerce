import {StyleSheet, View} from 'react-native';
import React from 'react';
import {orderOptions} from '@constants/common';
import typography from '@assets/fonts/typography';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';

const OrderTabs = ({activeTabIndex, setActiveTabIndex}) => {
  return (
    <View style={[styles.buttonContainer, {marginBottom: 16}]}>
      {orderOptions.map((option, index) => (
        <ButtonInput
          key={index}
          onPress={() => setActiveTabIndex(index)}
          btnCtnStyle={[
            {
              paddingVertical: 4,
              paddingHorizontal: 20,
            },
            activeTabIndex === index && styles.activeTab,
          ]}
          btnTxt={option.name}
          btnTxtStyle={{
            fontFamily: typography.inter24Bold,
            color: colors.black,
          }}
        />
      ))}
    </View>
  );
};

export default OrderTabs;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 380,
    height: 60,
    backgroundColor: colors.bgOrderButton,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  activeTab: {
    backgroundColor: colors.bgwhite,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});
