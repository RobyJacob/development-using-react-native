import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import Timer from './utils/Timer';
import CountDown from './components/CountDown';

const DEFAULT_WORK_MINS = 25;
const DEFAULT_BREAK_MINS = 5;

const nextTimer = {work: 'break', break: 'work'};
const minToSec = mins => mins * 60;

export default class App extends React.Component {
  state = {
    activeTimer: 'work',
    workTime: minToSec(DEFAULT_WORK_MINS),
    breakTime: minToSec(DEFAULT_WORK_MINS),
    timeRemaining: minToSec(DEFAULT_WORK_MINS) * 1000,
    isRunning: false,
  }

  componentDidMount() {
    this.timer = new Timer(this.state.timeRemaining, this.updateTimeRemaining);
    this.setState({isRunning: this.timer.isRunning});
  }

  componentWillUnmount() {
    if (this.timer) this.timer.stop();
  }

  updateTimeRemaining = timeRemaining => {
    this.setState({timeRemaining});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.heading, styles.center]}>{this.state.activeTimer} timer</Text>
        <CountDown style={styles.center} timeRemaining={this.state.timeRemaining} />
        <View style={[styles.buttongroup, styles.center]}>
          <Button title="start" />
          <Button title="reset" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    paddingTop: 150,
  },
  center: {
    alignSelf: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttongroup: {
    flexDirection: 'row',
  },
});
