import React from 'react';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  onPressed: (menu: string, sec: string) => void;
  disabled: boolean;
}
export default function InputForm(props: Props) {
  const [menu, setMenu] = useState('');
  const [sec, setSec] = useState('');
  const _onPressed = () => props.onPressed(menu, sec);
  const disabled: boolean = props.disabled
  const placeholder = {
    label: 'sec',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.menuInput} placeholder="Menu" onChangeText={menu => setMenu(menu)}/>
      {/* <TextInput style={styles.secInput} placeholder="Sec" onChangeText={sec => setSec(sec)}/> */}
      {/* <Icon name="angle-down" size={30} /> */}
      {/* <RNPickerSelect
        onValueChange={sec => setSec(sec)}
        style={styles.secInput}
        // placeholder={label:"10sec",value:"10"}
        items={[
          { label: "10sec", value: "10" },
          { label: "15sec", value: "15" },
          { label: "20sec", value: "20" },
          { label: "25sec", value: "25" },
          { label: "30sec", value: "30" },
          { label: "35sec", value: "35" },
          { label: "40sec", value: "40" },
          { label: "45sec", value: "45" },
          { label: "50sec", value: "50" },
          { label: "55sec", value: "55" },
          { label: "60sec", value: "60" },
        ]}
        /> */}
        <RNPickerSelect
          items={[
            { label: "10sec", value: "10" },
            { label: "15sec", value: "15" },
            { label: "20sec", value: "20" },
            { label: "25sec", value: "25" },
            { label: "30sec", value: "30" },
            { label: "35sec", value: "35" },
            { label: "40sec", value: "40" },
            { label: "45sec", value: "45" },
            { label: "50sec", value: "50" },
            { label: "55sec", value: "55" },
            { label: "60sec", value: "60" },
          ]}
          value={this.sec}
          onValueChange={sec => setSec(sec)}
          placeholder={placeholder}
          style={{
            ...styles,
            iconContainer: {
              top: 20,
              right: 10,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <Icon name="angle-down" size={24} color="gray" />;
          }}
        />
      <TouchableOpacity disabled={disabled} style={disabled ? styles.buttonDisabled : styles.button} onPress={_onPressed}>
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
    backgroundColor: '#ffffff',
    marginRight: 5,
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
  buttonDisabled: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  inputIOS: {
    fontSize: 16,
    height:55,
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex:1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
