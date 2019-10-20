import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, HeaderText, TextField, FooterText, ParagraphText } from '../../components/common'

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.jumbo}>
          <HeaderText title="AVAILABLE BALANCE" style={styles.balance}/>
          <HeaderText title="AVAILABLE BALANCE" style={styles.balance}/>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center"
  },
  background: {
    backgroundColor: "#479FAD",
    opacity: 0.1,
    alignItems: "center"
  },
  balance: {
    fontSize: 13
  }
})