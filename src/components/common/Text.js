import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
    {title} <Text style={[styles.footerSubTextStyle]} onPress={onPress}>{subTitle}</Text>
  </Text>
);

const MoneyText = ({style, subTitle, title}) => (
  <View>
    <Text style={[styles.footerTextStyle, style]}>
    {title} <Text style={[styles.footerSubTextStyle]}>{subTitle}</Text>
    </Text>
  </View>
)

export {BookText, FooterText, HeaderText, ParagraphText};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontFamily: 'Avenir-Black',
    fontSize: 32,
    color: '#3E4A59',
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: wp("8%")
  },
  paragraphTextStyle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
  },
  bookTextStyle: {
    fontFamily: 'Avenir-Book',
    fontSize: 16,
  },
  footerTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
    marginTop: 6.8,
    textAlign: "center",
    color: "#BABABA"
  },
  footerSubTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
    marginTop: 6.8,
    color: "#645DC0"
  }
});
