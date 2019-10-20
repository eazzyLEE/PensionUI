import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const addCardStyles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: hp('5.2%'),
  },
  footer: {
    marginTop: hp('2%'),
  },
  forgot: {
    marginTop: hp('2.6%'),
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
    textAlign: 'right',
    color: '#645DC0',
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 8,
  },
  image: {
    height: hp('23.2%'),
    width: wp('84%'),
    borderRadius: 8,
    marginTop: hp('1%'),
    resizeMode: 'cover',
  },
});

export const createAccountStyles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  createButton: {
    marginTop: hp('13%'),
  },
  footer: {
    marginTop: hp('2%'),
  },
});

export const loginStyles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: hp('5.2%'),
  },
  footer: {
    marginTop: hp('2%'),
  },
  forgot: {
    marginTop: hp('2.6%'),
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
    textAlign: 'right',
    color: '#645DC0',
  },
});
