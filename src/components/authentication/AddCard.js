import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { BackIcon, Button, HeaderText, TextField, TextFieldRow, FooterText, ParagraphText, Header } from '../../components/common'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class AddCard extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header title="Add Card" />
        <ImageBackground source={require("../../../assets/imgs/credit-card.png")} style={styles.image} imageStyle={styles.image}></ImageBackground>
        <KeyboardAwareScrollView>
        <TextField label={"My Card Number"} style={{marginTop: hp("5.1%")}}/>
        <TextFieldRow leftLabel="Exp. Date" rightLabel="CVV" />
        <Button title="ADD CARD" buttonStyle={styles.loginButton}/>
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
  },
  image: {
    height: hp("23.2%"),
    width: wp("84%"),
    borderRadius: 8,
    marginTop: hp("1%"),
    resizeMode: "cover"
  }
})