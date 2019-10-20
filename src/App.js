import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Router from './Router';

export default class App extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('#FFFFFF');
    StatusBar.setBarStyle('dark-content');
  }
  render() {
    return <Router />;
  }
}
