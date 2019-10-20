import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { ParagraphText } from "./Text"
import { Card } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TransactionCard = ({amount, color, date, title, onPress, owner}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card containerStyle={styles.transactionCard}>
        <View style={styles.transactionView}>
          <ParagraphText title={title ? title : "1 Wig"} style={styles.transactionDesc} />
          <ParagraphText title={amount ? amount : "₦20,500"} style={[styles.transactionAmount, color ? {color: color} : {color: "#F24750"} ]} />
        </View>
        <View style={styles.transactionView}>
          <ParagraphText title={owner ? owner : "Janet Lade"} style={styles.transactionOwner}/>
          <ParagraphText title={date ? date : "7, Monday October"} style={styles.transactionOwner}/>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export {TransactionCard}

const styles = StyleSheet.create({
  transactionCard: {
    height: hp('10.1%'),
    width: wp('93.1%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 6,
    alignSelf: 'center',
  },
  transactionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("78.1%")
  },
  transactionAmount: {
    fontFamily: "Avenir-Black",
    color: "#27AE60"
  },
  transactionOwner: {
    color: "#686C71",
    fontSize: 13
  },
  transactionDesc: {
    fontFamily: "Avenir-Black",
    fontSize: 16
  }
})