import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BackIcon, Button, HeaderText, TextField, FooterText } from '../../components/common'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Actions } from 'react-native-router-flux'

export default class CreateAccount extends Component {
  render() {
    return (
      <View style={styles.view}>
        <BackIcon />
        <HeaderText title="Create an Account"/>
        <KeyboardAwareScrollView>
        <TextField label={"First Name"} style={{marginTop: hp("5.1%")}}/>
        <TextField label={"Last Name"} />
        <TextField label={"Phone Number"} />
        <TextField label={"Email Address"} />
        <TextField label={"Bvn"} />
        <Button title="CREATE ACCOUNT" buttonStyle={styles.createButton} onPress={() => Actions.add_card()}/>
        <FooterText title="Already have an account?" subTitle="Login" style={styles.footer}/>
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
  createButton: {
    marginTop: hp("13%")
  },
  footer: {
    marginTop: hp("2%")
  }
})