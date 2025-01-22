import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import typography from '@assets/fonts/typography';
import {colors} from '@constants/colors';
import {authInputs} from '@constants/common';
import InputBox from '../Input';
import ButtonInput from '@components/common/ButtonInput';

const AuthHandler = ({isSignUp = false}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    if (isSignUp) {
      console.log('Username: ', username);
      console.log('Checked: ', checked);
    }
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  return (
    <View>
      {isSignUp ? (
        <Text style={styles.signUpText}>
          Sign up for personalized shopping and exclusive deals.
        </Text>
      ) : (
        <Text style={styles.signInText}>Sign In</Text>
      )}

      {authInputs
        .filter(input => isSignUp || input.id !== 1)
        .map(filteredInputs => (
          <View key={filteredInputs.id}>
            <InputBox
              inputName={filteredInputs.title}
              eye={filteredInputs.eye}
              value={
                filteredInputs.eye
                  ? password
                  : filteredInputs.title === 'Username'
                  ? username
                  : email
              }
              onChanged={input =>
                filteredInputs.eye
                  ? setPassword(input)
                  : filteredInputs.title === 'Username'
                  ? setUsername(input)
                  : setEmail(input)
              }
            />
          </View>
        ))}

      {isSignUp ? (
        <View style={{marginTop: 14}}>
          <ButtonInput
            onPress={() => setChecked(!checked)}
            btnCtnStyle={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            icon={
              checked
                ? require('@assets/icons/checked.png')
                : require('@assets/icons/unchecked.png')
            }
            imgStyle={{width: 28, height: 28, marginRight: 4}}
            btnTxt={
              <>
                <Text style={{color: colors.gray}}>I accepted </Text>
                <Text style={{color: colors.black}}>
                  Terms & Privacy Policy
                </Text>
              </>
            }
          />
        </View>
      ) : (
        <ButtonInput
          btnCtnStyle={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 28,
          }}
          btnTxt={'Forget Password?'}
          btnTxtStyle={{
            fontFamily: typography.inter28Black,
            color: colors.black,
            fontWeight: 'bold',
          }}
        />
      )}

      <ButtonInput
        btnCtnStyle={{
          width: 380,
          height: 56,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.black,
          borderRadius: 16,
          marginTop: isSignUp ? 28 : 0,
        }}
        btnTxtStyle={{
          fontFamily: typography.inter24Regular,
          color: colors.bgwhite,
          fontSize: 20,
        }}
        btnTxt={isSignUp ? 'Sign Up' : 'Sign In'}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AuthHandler;

const styles = StyleSheet.create({
  signInText: {
    fontFamily: typography.inter28Black,
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.black,
  },
  signUpText: {
    fontFamily: typography.inter24Bold,
    color: colors.gray,
  },
});
