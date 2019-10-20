import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BackIcon, Button, HeaderText, TextField, FooterText, ParagraphText } from '../../components/common'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.view}>
        <BackIcon />
        <HeaderText title="Glad you're back!"/>
        <KeyboardAwareScrollView>
        <TextField label={"My Email/Phone Number/My RSA Pin"} style={{marginTop: hp("5.1%")}}/>
        <TextField label={"My Password"} />
        <ParagraphText title={"Forgot your Password?"} style={styles.forgot}/>
        <Button title="LOG IN" buttonStyle={styles.loginButton}/>
        <FooterText title="New user?" subTitle="Create account" style={styles.footer}/>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center"
  },
  loginButton: {
    marginTop: hp("5.2%")
  },
  footer: {
    marginTop: hp("2%")
  },
  forgot: {
    marginTop: hp("2.6%"),
    fontFamily: "CircularStd-Medium",
    fontSize: 12,
    textAlign: "right",
    color: "#645DC0"
  }
})