import React from 'react';
import {
  View,
  Text,
  StyleSheet,
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
      <Text style={styles.text} >{menu}</Text>
      <Text style={styles.text} >{sec}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  text: {
    color: '#333',
  }
})