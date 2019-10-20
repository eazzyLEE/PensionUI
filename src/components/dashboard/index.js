import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FooterTabText} from '../../components/common';
import {Button, Footer, FooterTab} from 'native-base';
import {dashboardStyles as styles} from './styles';
import {
  CashSvg,
  AddSvg,
  HomeSvg,
  ProfileSvg,
  StatementSvg,
} from '../../../assets/mainsvgs';
import Home from './Home';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Home />
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTab}>
            <Button vertical>
              <HomeSvg />
              <FooterTabText title="Home" style={styles.activeFooter} />
            </Button>
            <Button onPress={() => console.log('statement')} vertical>
              <StatementSvg />
              <FooterTabText title="Statement" />
            </Button>
            <TouchableOpacity style={styles.plus}>
              <AddSvg />
            </TouchableOpacity>
            <Button vertical>
              <CashSvg />
              <FooterTabText title="Cash out" />
            </Button>
            <Button vertical>
              <ProfileSvg />
              <FooterTabText title="Profile" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
