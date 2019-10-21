import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BookText} from './Text';

const TextField = ({
  borderColor,
  keyboardType,
  onBlur,
  onFocus,
  label,
  labelStyle,
  onChangeText,
  secureTextEntry,
  style,
  value,
  focus,
  maxLength,
}) => {
  return (
    <View style={[styles.view, style]}>
      <Item
        floatingLabel
        style={{
          width: wp('84%'),
          borderColor: focus ? '#32BD58' : '#979797', //'#32BD58',
          borderBottomWidth: focus ? 1.5 : 0.5,
        }}>
        <Label style={styles.label}>{label}</Label>
        <Input
          style={styles.input}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          maxLength={maxLength}
          onFocus={onFocus}
          onBlur={onBlur}
          keyboardType={keyboardType}
        />
      </Item>
    </View>
  );
};

const TextFieldRow = ({
  leftLabel,
  labelStyle,
  leftOnChangeText,
  leftValue,
  leftKeyboardType,
  rightKeyboardType,
  rightOnChangeText,
  rightValue,
  rightLabel,
  leftMaxLength,
  rightMaxLength,
  secureTextEntry,
  style,
  value,
}) => {
  return (
    <View style={[styles.row, style]}>
      <Item floatingLabel style={{width: wp('39.3%')}}>
        <Label style={styles.label}>{leftLabel}</Label>
        <Input
          style={styles.input}
          onChangeText={leftOnChangeText}
          value={leftValue}
          maxLength={leftMaxLength}
          keyboardType={leftKeyboardType}
        />
      </Item>
      <Item floatingLabel style={{width: wp('39.3%'), marginLeft: wp('5.6%')}}>
        <Label style={styles.label}>{rightLabel}</Label>
        <Input
          style={styles.input}
          onChangeText={rightOnChangeText}
          value={rightValue}
          keyboardType={rightKeyboardType}
          maxLength={rightMaxLength}
          secureTextEntry={secureTextEntry}
        />
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: hp('3.1%'),
  },
  input: {
    marginTop: hp('0.8%'),
    fontFamily: 'Avenir-Black',
    fontSize: 18,
    color: '#24272B',
    borderColor: '#24272B',
  },
  row: {
    flexDirection: 'row',
    marginTop: hp('3.1%'),
  },
  label: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    color: '#3E4A59',
  },
});
export {TextField, TextFieldRow};
