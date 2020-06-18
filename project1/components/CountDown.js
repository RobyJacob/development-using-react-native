import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 72,
  },
});

const CountDown = props => {
  const totalSecs = Math.round(props.timeRemaining / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  const paddedZeros = secs < 10 ? '0': '';
  return <Text style={[styles.text, props.style]}>{mins}:{paddedZeros}{secs}</Text>;
}

export default CountDown;
