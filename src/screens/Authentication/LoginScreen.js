import {StyleSheet, Text} from 'react-native';
import React from 'react';

import typography from '@assets/fonts/typography';
import ContainerLayout from '@components/common/ContainerLayout';

import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';

import AuthHandler from '@components/others/authentication/AuthHandler';
import AuthButtons from '@components/others/authentication/AuthButtons';
import AuthSeparator from '@components/others/authentication/AuthSeparator';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ContainerLayout noScroll={true}>
      <Text style={styles.text}>Welcome Back!</Text>

      <AuthHandler />

      <AuthSeparator text={'OR'} />

      <AuthButtons onPress={() => navigation.navigate('SignUp')} />
    </ContainerLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: typography.inter28Black,
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 20,
  },
});
