import React, {useState} from 'react'
import InputForm from '../InputForm'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  text: string;
}
type Item = {
  id: number;
  text: string;
}
type ItemList = Item[] | [];
export default function RegisterFormView(props: Props) {
  const [itemList, setItemList] = useState<ItemList>([]);
  const onPressed = (text: string) => {
    const l = ([] as Item[]).concat(itemList);
    const num = l.length;
    l.push({
      id: num,
      text: text,
    })
    setItemList(l);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{props.text}</Text> */}
      <InputForm onPressed={onPressed}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    flex: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});