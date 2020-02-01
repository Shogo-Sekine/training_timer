import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

type Props = {
  onPressed: (text: string) => void
}
export default function InputForm(props: Props) {
  const [text, setText] = useState('');
  const _onPressed = () => props.onPressed(text);

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={text => setText(text)}/>
      <TouchableOpacity style={styles.button} onPress={_onPressed}>
        <Text style={styles.buttonText}>追加</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#008080',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  }
});
