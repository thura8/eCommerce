import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';

const AccountItems = ({icon, title, subtitle}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.iconContainer}>
          <FastImage source={icon} style={styles.icon} />
        </View>
        <View style={{paddingVertical: subtitle ? 0 : 10}}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      <FastImage
        source={require('@assets/icons/right_arrow.png')}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
};

export default AccountItems;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    fontFamily: typography.inter24Medium,
    fontSize: 18,
    color: colors.black,
  },
  subtitle: {
    fontFamily: typography.inter24Regular,
    fontSize: 14,
    color: colors.gray,
  },
  arrow: {
    width: 28,
    height: 28,
  },
});
