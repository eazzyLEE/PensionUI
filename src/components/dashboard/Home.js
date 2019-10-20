import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {
  HeaderText,
  MoneyText,
  DebitTransactionCard,
  TransactionCard,
} from '../../components/common';
import {homeStyles as styles} from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.jumbo}>
          <HeaderText title="AVAILABLE BALANCE" style={styles.balanceText} />
          <MoneyText title="547,916." subTitle="15" />
          <HeaderText
            title="My Total Balance: NGN 10,690,918.65"
            style={styles.balance}
          />
          <Image
            source={require('../../../assets/imgs/hero.png')}
            style={styles.transaction}
            resizeMode="contain"
          />
        </View>
        <HeaderText title="RECENT TRANSACTIONS" style={styles.recent} />
        <Divider style={styles.divider} />
        <ScrollView style={{marginBottom: hp('10%')}}>
          <TransactionCard />
          <DebitTransactionCard />
          <TransactionCard />
          <TransactionCard />
          <DebitTransactionCard date="16 January 2018" />
        </ScrollView>
      </View>
    );
  }
}
