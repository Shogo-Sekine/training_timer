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
  onPressed: (menu: string, sec: string) => void,
  disabled: boolean
}
export default function InputForm(props: Props) {
  const [menu, setMenu] = useState('');
  const [sec, setSec] = useState('');
  const _onPressed = () => props.onPressed(menu, sec);
  const disabled: boolean = props.disabled

  return (
    <View style={styles.container}>
      <TextInput style={styles.menuInput} placeholder="Menu" onChangeText={menu => setMenu(menu)}/>
      <TextInput style={styles.secInput} placeholder="Sec" onChangeText={sec => setSec(sec)}/>
      <TouchableOpacity disabled={disabled} style={styles.button} onPress={_onPressed}>
        <Text style={styles.buttonText}>追加</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    flexDirection: 'row',
    height: 75,
    width: '100%',
  },
  menuInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  secInput: {
    flex: 1,
    backgroundColor: '#FFF',
    marginRight: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
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
