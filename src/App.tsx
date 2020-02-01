import React from 'react'
import { useState } from 'react';
import TimerButton from './components/TimerButton';
import InputForm from './components/InputForm';
import RowItem from './components/RowItem';
import CountDownTimer from './components/CountDownTimer';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

type Item = {
  id: number;
  text: string;
}
type ItemList = Item[] | [];

export default function App() {
  const [onTimer, setTimer] = useState<boolean>(false);
  const [itemList, setItemList] = useState<ItemList>([]);

  const changeTimer = (b: boolean) => setTimer(b);
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
      <View style={styles.main}>
        <TimerButton changeTimer={changeTimer}/>
        {onTimer && (
          <CountDownTimer changeTimer={changeTimer}/>
        )}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});