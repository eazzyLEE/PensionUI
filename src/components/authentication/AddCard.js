import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {
  Button,
  TextField,
  TextFieldRow,
  BookText,
  Header,
} from '../../components/common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {addCardStyles as styles} from './styles';
import {Actions} from 'react-native-router-flux';

export default class AddCard extends Component {
  state = {
    card_number: '',
    exp: '',
    focus: false,
  };

  render() {
    console.log(hp('100%'));
    return (
      <View style={styles.view}>
        <Header title="Add Card" style={{marginTop: hp('4%')}} />
        <ImageBackground
          source={require('../../../assets/imgs/credit-card.png')}
          style={styles.image}
          imageStyle={styles.imageView}>
          <BookText title="CARD NUMBER" style={{marginTop: hp('8%')}} />
          <BookText
            title={this.state.card_number}
            style={{marginTop: hp('2%')}}
          />
          <BookText title="VALID THRU" style={{marginTop: hp('1%')}} />
          <BookText title={this.state.exp} style={{marginTop: hp('2%')}} />
        </ImageBackground>
        <KeyboardAwareScrollView>
          <TextField
            label={'My Card Number'}
            style={{marginTop: hp('5.1%')}}
            value={this.state.card_number}
            onChangeText={value => this.setState({card_number: value})}
            maxLength={19}
            onFocus={() => this.setState({focus: true})}
            focus={this.state.focus}
            onBlur={() => this.setState({focus: false})}
          />

          <TextFieldRow
            leftLabel="Exp. Date"
            rightLabel="CVV"
            maxLength={5}
            leftOnChangeText={value => this.setState({exp: value})}
          />
          <Button
            title="ADD CARD"
            buttonStyle={styles.loginButton}
            onPress={() => Actions.dashboard()}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
