import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {
  id: string;
  menu: string;
  sec: string;
  onDeletePressed: (id: string) => void;
}
export default function RowItem(props: Props) {
  const { menu, sec } = props;
  const _onPressed = () => props.onDeletePressed(props.id);

  return (
    <View style={styles.container}>
      <TextInput editable={false} style={styles.menu} >{menu}</TextInput>
      <TextInput editable={false} style={styles.sec} >{sec}</TextInput>
      <TouchableOpacity style={styles.button} onPress={_onPressed}>
        <Text style={styles.buttonText}>削除</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    minHeight: 50,
    marginBottom: 5,
  },
  menu: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  sec: {
    flex: 2,
    backgroundColor: '#FFF',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  button: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  }
})