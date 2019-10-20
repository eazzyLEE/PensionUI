import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { BookText } from './Text'
import { Icon } from './Icon';
import { Actions } from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BackIcon = ({ onPress, style }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.iconView, style]}
        onPress={onPress ? onPress : () => Actions.pop()}>
        <Icon name="BackIcon" width="12" height="21" viewBox="0 0 12 21" />
      </TouchableOpacity>
    </View>
  );
};

export { BackIcon };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('11%'),
    marginTop: hp('3.0%'),
    marginLeft: wp('3.5%'),
  },
  iconView: {
    alignItems: 'center',
    width: wp('11%'),
    borderRadius: wp('11%') / 2,
    // backgroundColor: '#F6F6F6',
  },
  
});
