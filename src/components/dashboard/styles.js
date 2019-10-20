import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const dashboardStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  jumbo: {
    backgroundColor: '#edf5f7',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('45.1%'),
    width: wp('100%'),
  },
  balance: {
    fontSize: 13,
    alignSelf: 'center',
  },
  footer: {
    height: 78,
    bottom: 0,
    position: 'absolute',
  },
  footerTab: {
    backgroundColor: '#FFFFFF',
    borderTopColor: 'rgba(155, 132, 135, 0.142097)',
    borderTopWidth: 4,
  },
  activeFooter: {
    fontFamily: 'Avenir-Black',
    color: '#030404',
  },
  plus: {
    marginTop: 4,
  },
});

export const homeStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  jumbo: {
    backgroundColor: '#edf5f7',
    // justifyContent: 'center',
    alignItems: 'center',
    height: hp('45.1%'),
    width: wp('100%'),
  },
  balanceText: {
    marginTop: hp('13%'),
    fontSize: 13,
    alignSelf: 'center',
    color: '#859AAD',
  },
  balance: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#32BD58',
    marginTop: -hp('1.5%'),
  },
  transaction: {
    marginTop: -hp('7%'),
    width: wp('100%'),
  },
  recent: {
    fontSize: 13,
    alignSelf: 'center',
    marginTop: hp('1%'),
    color: '#242B33',
  },
  divider: {
    width: wp('100%'),
    height: 1,
    borderColor: '#D3D9E0',
    marginTop: hp('1%'),
  },
});
