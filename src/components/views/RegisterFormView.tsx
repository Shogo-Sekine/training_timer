import React, {useState} from 'react'
import InputForm from '../InputForm'
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Dialog from "react-native-dialog";
import RowItem from '../RowItem';
import { TrainingMenuSchema } from '../../schema/TrainingMenu';
import { TrainingTableSchema } from '../../schema/TrainingTable';
import { TrainingMenu } from '../../models/TrainingMenu';
import { TrainingTable } from '../../models/TrainingTable';
import Realm from 'realm';
import uuid from 'uuid';

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
    console.log(sec);
    const reg = new RegExp(/^[0-9]+$/);
    if(menu === '' || !reg.test(sec)) {
      openWarningDialog()
      return;
    }
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
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
  const [warningDialogVisible, setWarningDialogVisible] = useState(false);

  const showDialog = () => {
    if (itemList.length == 0) {
      openWarningDialog();
    } else {
      setConfirmDialogVisible(true);
    }
  };

  const handleCancel = () => {
    setConfirmDialogVisible(false);
  };

  const handleRegister = () => {
    Realm.open({schema: [TrainingMenuSchema, TrainingTableSchema]})
    .then(realm => {
      // Realmオブジェクトを作成してローカルDBに保存します
      console.log('Realm called');
      realm.write(() => {
        const menus: TrainingMenu[] = [];
        itemList.forEach((item) => {
          menus.push(
            {
              menuId: item.id,
              menu: item.menu,
              sec: Number(item.sec),
            }
          );
        });
        console.log(menus);
        const table = realm.create('TrainingTableSchema', {
          tableId: uuid.v4(),
          menus,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        // myCar.miles += 20; // 保存済みの値を更新することもできます
      });
  
      // 'miles > 1000'に該当するCarオブジェクトを検索します
      const cars = realm.objects('TrainingTable');
  
      // 上記の条件に該当するCarオブジェクトは１件です
      cars.length // => 1
    });
  }


  const openWarningDialog = () => {
    setWarningDialogVisible(true);
  }

  const closeWarningDialog = () => {
    setWarningDialogVisible(false);
  };


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
        <TouchableOpacity style={styles.button} onPress={showDialog}>
          <Text style={styles.buttonText}>登録</Text>
        </TouchableOpacity>
        <Dialog.Container visible={confirmDialogVisible}>
          <Dialog.Title>メニュー登録</Dialog.Title>
          <Dialog.Description>
            登録してよろしいですか?
          </Dialog.Description>
          <Dialog.Button label="キャンセル" onPress={handleCancel} />
          <Dialog.Button label="登録" onPress={handleRegister} />
        </Dialog.Container>
        <Dialog.Container visible={warningDialogVisible}>
          <Dialog.Title>未追加</Dialog.Title>
          <Dialog.Description>
            トレーニングメニューを追加してください
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={closeWarningDialog} />
        </Dialog.Container>
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