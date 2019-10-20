import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {NairaSvg} from '../../../assets/mainsvgs';

const HeaderText = ({style, title}) => (
  <Text style={[styles.headerTextStyle, style]}>{title}</Text>
);

const ParagraphText = ({onPress, style, title}) => (
  <Text style={[styles.paragraphTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

const BookText = ({onPress, style, title}) => (
  <Text style={[styles.bookTextStyle, style]} onPress={onPress}>
    {title}
  </Text>
);

const FooterText = ({onPress, style, subTitle, title}) => (
  <Text style={[styles.footerTextStyle, style]}>
    {title}{' '}
    <Text style={[styles.footerSubTextStyle]} onPress={onPress}>
      {subTitle}
    </Text>
  </Text>
);

const FooterTabText = ({style, title}) => (
  <Text style={[styles.footerTabText, style]}>{title}</Text>
);

const MoneyText = ({style, subTitle, title}) => (
  <View style={[styles.moneyView, style]}>
    <NairaSvg />
    <Text style={[styles.moneyText]}>
      {title}
      <Text style={[styles.moneySubText]}>{subTitle}</Text>
    </Text>
  </View>
);

export {
  BookText,
  FooterText,
  FooterTabText,
  HeaderText,
  MoneyText,
  ParagraphText,
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontFamily: 'Avenir-Black',
    fontSize: 32,
    color: '#3E4A59',
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginLeft: wp('8%'),
  },
  paragraphTextStyle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
  },
  bookTextStyle: {
    fontFamily: 'CreditCard',
    fontSize: 10,
    color: '#FFFFFF',
    marginLeft: wp('3.5%'),
  },
  footerTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
    marginTop: 6.8,
    textAlign: 'center',
    color: '#BABABA',
  },
  footerSubTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
    marginTop: 6.8,
    color: '#645DC0',
  },
  footerTabText: {
    fontFamily: 'Avenir-Black',
    color: '#8F9FB3',
    marginTop: 4.8,
    fontSize: 12,
  },
  moneyView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moneyText: {
    fontFamily: 'Avenir-Black',
    fontSize: 38,
    color: '#1F3F66',
    marginLeft: wp('1%'),
  },
  moneySubText: {
    fontFamily: 'Avenir-Black',
    fontSize: 25,
    color: '#1F3F66',
  },
});
