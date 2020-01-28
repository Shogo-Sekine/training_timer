import React from 'react';
import { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  _onPressButton() {
    Alert.alert('ボタンを押しました！')
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text>start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text>end</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
});
