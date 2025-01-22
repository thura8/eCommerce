import {View, Text} from 'react-native';
import React from 'react';
import ContainerLayout from '@components/common/ContainerLayout';
import typography from '@assets/fonts/typography';
import {colors} from '@constants/colors';
import AuthHandler from '@components/others/authentication/AuthHandler';
import AuthSeparator from '@components/others/authentication/AuthSeparator';
import AuthButtons from '@components/others/authentication/AuthButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ContainerLayout noScroll={true}>
      <Text
        style={{
          fontFamily: typography.inter28Black,
          fontSize: 30,
          color: colors.black,
          marginTop: 8,
        }}>
        Create Your Account
      </Text>

      <AuthHandler isSignUp />

      <AuthSeparator text={'Or sign in with'} />

      <AuthButtons onPress={() => navigation.navigate('Login')} isSignUp />
    </ContainerLayout>
  );
};

export default SignUpScreen;
