import React, {useState} from 'react'
import RegisterFormView from './components/views/RegisterFormView';
import TimerView from './components/views/TimerView';
import SettingView from './components/views/SettingView';
import Top from './components/views/Top'
import Footer from './Footer';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Item = {
  id: number;
  text: string;
}
type ItemList = Item[] | [];

enum Tab {
  Home,
  Plus,
  Timer,
  Setting
}

Icon.loadFont();

export default function App() {
  const [onTimer, setTimer] = useState<boolean>(false);
  const [itemList, setItemList] = useState<ItemList>([]);
  const [tab, setTab] = useState<Tab>(Tab.Home);

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

  const footerPressed = (tab: Tab) => { setTab(tab); }

  const reserSelectedTab = () => {
    switch(tab) {
      case Tab.Home:
        return <Top text='Home' />;
      case Tab.Plus:
        return <RegisterFormView text='Plus' />
      case Tab.Timer:
        return <TimerView text='Timer' />
      case Tab.Setting:
        return <SettingView text='Setting' />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>{reserSelectedTab()}</View>
      {/* <View style={styles.main}>
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
      </View> */}
      <Footer tab={tab} onPressed={footerPressed}/>
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
    flex: 9,
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