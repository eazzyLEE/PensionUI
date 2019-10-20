import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as Btn} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({buttonStyle, onPress, title, titleStyle}) => {
  return (
    <Btn
      title={title}
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={[styles.title, titleStyle]}
      onPress={onPress}
    />
  );
};

export {Button};

const styles = StyleSheet.create({
  button: {
    width: wp('84%'),
    height: hp('6.5%'),
    backgroundColor: '#BABABA',
    borderStyle: 'solid',
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Avenir-Black',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
