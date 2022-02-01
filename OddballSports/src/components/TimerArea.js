// part 1 - imports
import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Switch, TextInput, Button, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Timer, Countdown} from 'react-native-element-timer';
import TimerScreen from './TimerScreen';

// part 2 - create a component
const TimerArea = () => {

  // timer state control
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);
  const toggleSwitch = () => setIsTimerEnabled(previousState => !previousState);

  // timer started state control
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  // timer value state
  const [timerMinutes, setTimerMinutes] = useState(20)
  const onTermChange = (term) => setTimerMinutes(term);

  const timerControl = () => {
    if (isTimerEnabled) {
      if (isTimerStarted) {
        return <Text>timer is started</Text>;
      } else {
        return <View style={styles.container}>
              <TimerScreen />
            </View>
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.timerToggleLabel}>Timer</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isTimerEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isTimerEnabled}
        />
      </View>
      <View>
        {timerControl(isTimerEnabled)}
      </View>
    </>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timerToggleLabel: {
    padding: 5
  },
  timerInputBar: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: 120
  },
  timerInputBarIcon: {
    fontSize: 38,
    marginHorizontal: 10,
    alignSelf: 'center'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});

// part 4 - export the component
export default TimerArea;