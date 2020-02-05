import React, {useState} from 'react'
import InputForm from '../InputForm'
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import RowItem from '../RowItem';

type Props = {
  text: string;
}
type Item = {
  id: string;
  text: string;
}
type ItemList = Item[] | [];
export default function RegisterFormView(props: Props) {
  const [itemList, setItemList] = useState<ItemList>([]);
  const onPressed = (text: string) => {
    const l = ([] as Item[]).concat(itemList);
    const id_ = String(l.length);
    l.push({
      id: id_,
      text: text,
    })
    setItemList(l);
    console.log(l);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{props.text}</Text> */}
      <View style={styles.form}>
        <InputForm onPressed={onPressed}/>
        <View style={styles.todoListContainer}>
          <FlatList
            style={styles.todoList}
            data={itemList}
            renderItem={({ item }) => <RowItem {...item} />}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  text: {
    flex: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  form: {
    height: 120,
    marginTop: 100,
    width: '100%',
  },
  todoListContainer: {
    flex: 1,
    padding: 0,
  },
  todoList: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 5,
  }
});