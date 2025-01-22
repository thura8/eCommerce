import {StyleSheet, View} from 'react-native';
import React from 'react';

import typography from '@assets/fonts/typography';
import {bottomTabs} from '@constants/common';
import ButtonInput from '../ButtonInput';
import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';

const Footer = ({activeTabIndex = 0}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.itemRow}>
        {bottomTabs.map((tab, index) => (
          <ButtonInput
            key={index}
            btnTxt={tab.name}
            icon={tab.icon}
            btnCtnStyle={[
              styles.btnContainer,
              activeTabIndex === index && styles.activeTab,
            ]}
            btnTxtStyle={[
              styles.btnText,
              activeTabIndex === index && styles.activeText,
            ]}
            imgStyle={styles.iconStyle}
            onPress={() => navigation.navigate(tab.name)}
          />
        ))}
      </View>
    </View>
  );
};

export default Footer;

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
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnContainer: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  btnText: {
    fontFamily: typography.inter24Regular,
    textAlign: 'center',
    fontSize: 12,
    color: colors.gray,
  },
  activeText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 28,
    height: 28,
    tintColor: colors.gray,
  },
  activeIcon: {
    tintColor: colors.black,
    width: 32,
    height: 32,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
  },
});
