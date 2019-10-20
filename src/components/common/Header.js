import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { HeaderText } from './Text'
import { Icon } from './Icon';
import { Actions } from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({ onPress, style, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.iconView, style]}
        onPress={onPress ? onPress : () => Actions.pop()}>
        <Icon name="BackIcon" width="12" height="21" viewBox="0 0 12 21" />
      </TouchableOpacity>
      <HeaderText title={title} style={styles.headerText}/>
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('14.4%'),
    // marginTop: hp('3%'),
    marginLeft: wp('3.5%'),
  },
  iconView: {
    alignItems: 'center',
    width: wp('11%'),
    borderRadius: wp('11%') / 2,
  },
  headerText: {
    fontSize: 24,
    marginTop: hp('1.7%'),
    color: '#43496A',
    marginLeft: wp("25.5%")
  }
});
