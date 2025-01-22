import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import heartIcon from '@assets/icons/heart.png';
import typography from '@assets/fonts/typography';
import FastImage from 'react-native-fast-image';
import {colors} from '@constants/colors';

const NoSavedPages = ({
  icon = heartIcon,
  title = 'No Saved Items!',
  subtitle = "You don't have any saved items.",
  description = 'Go to home and add some.',
}) => {
  return (
    <View style={styles.container}>
      <FastImage source={icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  );
};

export default NoSavedPages;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 12,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: typography.fontRegular,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: typography.inter24Regular,
    color: colors.gray,
    textAlign: 'center',
    marginVertical: 2,
  },
});
