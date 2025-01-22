import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ContainerLayout from '@components/common/ContainerLayout';
import AccountSection from '@components/others/Account/AccountSection';
import {accountGeneral, accountSetting} from '@constants/common';
import ButtonInput from '@components/common/ButtonInput';
import ConfirmationModal from '@components/common/ConfirmModal';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';

const AccountScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogOut = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    console.log('Logged Out');
  };

  return (
    <ContainerLayout headerTitle={'My Account'}>
      <View>
        <AccountSection data={accountGeneral} title={'General'} />
        <AccountSection data={accountSetting} title={'Setting'} />
      </View>

      <ButtonInput
        btnCtnStyle={styles.btnContainer}
        btnTxt={'Log Out'}
        btnTxtStyle={styles.btnTxt}
        onPress={handleLogOut}
      />

      <ConfirmationModal
        visible={isModalVisible}
        title="Logout"
        message="Are you sure you want to log out?"
        confirmText="Log out"
        cancelText="Cancel"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </ContainerLayout>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  btnContainer: {
    width: 380,
    height: 56,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  btnTxt: {
    color: colors.red,
    fontFamily: typography.fontMedium,
    fontSize: 16,
  },
});
