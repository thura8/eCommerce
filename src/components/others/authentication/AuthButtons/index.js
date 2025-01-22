import {View} from 'react-native';
import React from 'react';

import {authButtons} from '@constants/common';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import SwitchAuthOptions from '../SwitchAuthOptions';
import ButtonInput from '@components/common/ButtonInput';

const AuthButtons = ({onPress, isSignUp}) => {
  return (
    <View>
      {authButtons.map((btn, index) => (
        <ButtonInput
          key={index}
          icon={btn.icon}
          btnTxt={btn.value}
          btnTxtStyle={{
            color: colors.gray,
            fontFamily: typography.inter24Regular,
            fontSize: 18,
            fontWeight: 'bold',
          }}
          btnCtnStyle={{
            height: 56,
            borderWidth: 1,
            borderColor: colors.gray,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 24,
            paddingVertical: 4,
            marginBottom: 28,
            backgroundColor: colors.bgwhite,
            columnGap: btn.id === 2 ? 34 : 16,
          }}
          imgStyle={{width: 30, height: 30}}
        />
      ))}

      <SwitchAuthOptions onPress={onPress} isSignUpEnabled={isSignUp} />
    </View>
  );
};

export default AuthButtons;
