import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {colors} from '@constants/colors';
import typography from '@assets/fonts/typography';
import ButtonInput from '../ButtonInput';

const ConfirmationModal = ({
  visible,
  onCancel,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <ButtonInput
              btnCtnStyle={styles.cancelButton}
              onPress={onCancel}
              btnTxt={cancelText}
              btnTxtStyle={styles.cancelText}
            />
            <ButtonInput
              btnCtnStyle={styles.confirmButton}
              onPress={onConfirm}
              btnTxt={confirmText}
              btnTxtStyle={styles.confirmText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: colors.bgwhite,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: typography.fontMedium,
    fontSize: 18,
    color: colors.black,
    marginBottom: 10,
  },
  message: {
    fontFamily: typography.fontRegular,
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: colors.red,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelText: {
    fontFamily: typography.fontMedium,
    fontSize: 16,
    color: colors.black,
  },
  confirmText: {
    fontFamily: typography.fontMedium,
    fontSize: 16,
    color: colors.bgwhite,
  },
});
