import React from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  text: string;
}
export default function Top(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 20,
  },
  text: {
    flex: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});