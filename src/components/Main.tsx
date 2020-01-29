import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {
  changeTimer: (b: boolean) => void
}
export default function Main(props :Props) {
  const _onPressButton = () => {
    props.changeTimer(true);
  }
  return (
    <View>
      <TouchableOpacity onPress={_onPressButton} style={styles.button}>
        <Text>start</Text>
      </TouchableOpacity>
    </View>
  )
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
