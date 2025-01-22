import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const ButtonInput = ({
  icon,
  btnTxt,
  btnTxtStyle,
  btnCtnStyle,
  onPress,
  imgStyle,

  icon2,
}) => {
  return (
    <TouchableOpacity style={btnCtnStyle} onPress={onPress}>
      {icon && (
        <FastImage source={icon} style={imgStyle} resizeMode="contain" />
      )}
      {btnTxt && <Text style={btnTxtStyle}>{btnTxt}</Text>}

      {icon2 && (
        <FastImage source={icon2} style={imgStyle} resizeMode="contain" />
      )}
    </TouchableOpacity>
  );
};

export default ButtonInput;
