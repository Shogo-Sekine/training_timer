import React, {useState} from 'react'
import InputForm from '../InputForm'
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import RowItem from '../RowItem';

type Props = {
  text: string;
}
type Item = {
  id: string;
  menu: string;
  sec: string;
}
type ItemList = Item[] | [];
export default function RegisterFormView(props: Props) {
  const [itemList, setItemList] = useState<ItemList>([]);
  const onPressed = (menu: string, sec: string) => {
    const l = ([] as Item[]).concat(itemList);
    const id_ = String(l.length);
    l.push({
      id: id_,
      menu: menu,
      sec: sec,
    })
    setItemList(l);
    console.log(l);
  };
  const onDeletePressed = (id: string) => {
    const deleted = itemList.filter((item: Item) => item.id !== id);
    setItemList(deleted);
  }


  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputForm onPressed={onPressed} disabled={itemList.length >=10 }/>
        <View style={styles.todoListContainer}>
          <FlatList
            style={styles.todoList}
            data={itemList}
            renderItem={({ item }) => <RowItem onDeletePressed={onDeletePressed} {...item} />}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>登録</Text>
        </TouchableOpacity>
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
    height: '100%',
    width: '100%',
    marginTop: 10,
  },
  todoListContainer: {
    flex: 10,
    height: 1000,
    padding: 0,
  },
  todoList: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 15,
    marginLeft: 5,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  }
});