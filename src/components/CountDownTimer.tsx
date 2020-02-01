import React from 'react'
import CountDown from 'react-native-countdown-component';

import {
  Alert,
} from 'react-native';

type Props = {
  changeTimer: (b: boolean) => void
}
export default function CountDownTimer(props: Props) {
  return (
    <CountDown
      until={10}
      onFinish={() => props.changeTimer(false)}
      onPress={() => Alert.alert('hello')}
      timeToShow={['S']}
      size={50}
      showSeparator={true}
    />
  )
}