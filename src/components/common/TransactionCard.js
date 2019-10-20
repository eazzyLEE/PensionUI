import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ParagraphText} from './Text';
import {Badge, Card} from 'react-native-elements';
import {ActivitySvg, DebitActivitySvg} from '../../../assets/mainsvgs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TransactionCard = ({amount, color, date, title, onPress, owner}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card containerStyle={styles.transactionCard}>
        <View style={styles.parentView}>
          <ActivitySvg />
          <View>
            <View style={styles.transactionView}>
              <ParagraphText
                title={title ? title : "Pension Apr'2011"}
                style={styles.transactionDesc}
              />
              <ParagraphText
                title={amount ? amount : '₦4,600.74'}
                style={[
                  styles.transactionAmount,
                  color ? {color: color} : {color: '#212337'},
                ]}
              />
            </View>
            <View style={styles.transactionView}>
              <ParagraphText
                title={owner ? owner : '12 April 2018'}
                style={styles.transactionOwner}
              />
              <Badge
                value={
                  <ParagraphText
                    title="CONTRIBUTION"
                    style={styles.badgeText}
                  />
                }
                badgeStyle={styles.badge}
              />
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const DebitTransactionCard = ({amount, color, date, title, onPress, owner}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card containerStyle={styles.transactionCard}>
        <View style={styles.parentView}>
          <DebitActivitySvg />
          <View>
            <View style={styles.transactionView}>
              <ParagraphText
                title={title ? title : 'Cash Out'}
                style={styles.transactionDesc}
              />
              <ParagraphText
                title={amount ? amount : '₦4,600.74'}
                style={[
                  styles.transactionAmount,
                  color ? {color: color} : {color: '#212337'},
                ]}
              />
            </View>
            <View style={styles.transactionView}>
              <ParagraphText
                title={date ? date : '19 March 2019'}
                style={styles.transactionOwner}
              />
              <Badge
                value={
                  <ParagraphText
                    title="CASH OUT"
                    style={styles.debitBadgeText}
                  />
                }
                badgeStyle={styles.debitBadge}
              />
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export {DebitTransactionCard, TransactionCard};

const styles = StyleSheet.create({
  transactionCard: {
    height: hp('11.7%'),
    width: wp('94.7%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F9',
    borderRadius: 4,
    // elevation: 6,
    alignSelf: 'center',
  },
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('88.1%'),
  },
  transactionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('78.1%'),
  },
  transactionAmount: {
    fontFamily: 'Avenir-Black',
    color: '#27AE60',
    marginTop: hp('1%'),
  },
  transactionOwner: {
    fontFamily: 'Avenir-Black',
    color: '#8b8d98',
    fontSize: 13,
  },
  transactionDesc: {
    fontFamily: 'Avenir-Black',
    fontSize: 16,
  },
  badge: {
    backgroundColor: '#e2f0e8',
    padding: wp('1%'),
    marginTop: hp('1%'),
  },
  badgeText: {
    color: '#32BD58',
    fontSize: 10,
  },
  debitBadgeText: {
    color: '#ED7136',
    fontSize: 10,
  },
  debitBadge: {
    backgroundColor: '#f5e9e7',
    padding: wp('1%'),
    marginTop: hp('1%'),
  },
});
