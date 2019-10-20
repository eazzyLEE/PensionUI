import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as Btn} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ActionButton = ({buttonStyle, onPress, title, titleStyle}) => {
  return (
    <Btn
      title={title}
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={[styles.title, titleStyle]}
      onPress={onPress}
    />
  );
};

export {ActionButton};

const styles = StyleSheet.create({
  button: {
    width: wp("23.6%"),
    height: hp("4.2%"),
    backgroundColor: "#77869E",
    borderRadius: 8
  },
  title: {
    fontFamily: 'Avenir-Medium',
    fontSize: 12,
    color: '#FFFFFF',
  },
});
