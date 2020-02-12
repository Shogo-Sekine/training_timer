import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

type Props = {
  menu: string;
  sec: string;
}
export default function RowItem(props: Props) {
  const {
    menu,
    sec,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput editable={false} style={styles.menu} >{menu}</TextInput>
      <TextInput editable={false} style={styles.sec} >{sec}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    minHeight: 50,
  },
  menu: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  sec: {
    flex: 2,
    backgroundColor: '#FFF',
    marginBottom: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
  }
})