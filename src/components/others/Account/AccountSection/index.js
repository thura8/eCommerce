import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import AccountItems from '@components/others/Account/AccountItems';

const AccountSection = ({title, data}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <AccountItems
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </View>
  );
};

export default AccountSection;

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  title: {
    fontFamily: typography.inter28Black,
    fontSize: 20,
    color: colors.black,
    marginBottom: 12,
  },
});
