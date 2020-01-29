import React from 'react'
import CountDown from 'react-native-countdown-component';

import {
  Alert,
} from 'react-native';

export default function CountDownTimer() {
  return (
    <CountDown
      until={10}
      onFinish={() => Alert.alert('finished')}
      onPress={() => Alert.alert('hello')}
      timeToShow={['S']}
      size={50}
      showSeparator={true}
    />
  )
}