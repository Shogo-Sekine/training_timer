import React, {useState} from 'react'
import TimerButton from '../TimerButton'
import CountDownTimer from '../CountDownTimer'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  text: string;
}
export default function TimerView(props: Props) {
  const [onTimer, setTimer] = useState<boolean>(false);
  const changeTimer = (b: boolean) => setTimer(b);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <TimerButton changeTimer={changeTimer}/>
        {onTimer && (
          <CountDownTimer changeTimer={changeTimer}/>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});