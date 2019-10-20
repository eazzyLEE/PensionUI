import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BackIcon,
  Button,
  HeaderText,
  TextField,
  FooterText,
  ParagraphText,
} from '../../components/common';
import {loginStyles as styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.view}>
        <BackIcon />
        <HeaderText title="Glad you're back!" />
        <KeyboardAwareScrollView>
          <TextField
            label={'My Email/Phone Number/My RSA Pin'}
            style={{marginTop: hp('5.1%')}}
          />
          <TextField label={'My Password'} />
          <ParagraphText
            title={'Forgot your Password?'}
            style={styles.forgot}
          />
          <Button title="LOG IN" buttonStyle={styles.loginButton} />
          <FooterText
            title="New user?"
            subTitle="Create account"
            style={styles.footer}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
