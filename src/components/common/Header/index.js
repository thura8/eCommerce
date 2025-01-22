import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import arrowLeft from '@assets/images/24px/Arrow_left.png';

import typography from '@assets/fonts/typography';
import {colors} from '@constants/colors';

import ButtonInput from '../ButtonInput';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ButtonInput
        icon={arrowLeft}
        btnCtnStyle={{
          position: 'absolute',
          top: 16,
          left: 0,
          zIndex: 10,
        }}
        imgStyle={{width: 28, height: 28}}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    height: 60,
    justifyContent: 'center',
    pointerEvents: 'box-none',
  },
  text: {
    fontFamily: typography.inter28Black,
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
  },
});
