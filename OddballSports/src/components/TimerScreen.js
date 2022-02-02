import React, {useRef, useState} from 'react';
import {StyleSheet, Button, Text, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import {Timer, Countdown} from 'react-native-element-timer';
import {MaterialIcons, FontAwesome} from "@expo/vector-icons";

const TimerScreen = _props => {
  const timerRef = useRef(null);
  const countdownRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [stopped, setStopped] = useState(true);
  const [initialSeconds, setInitialSeconds] = useState(1200);

  const submitTime = (newTerm) => {
    if (stopped) {
      setInitialSeconds(newTerm * 60);
    }
  };

  const displayTimerInput = () => {
    if (stopped) {
      return <View style={styles.timerInput}>
        <MaterialIcons name="timer" style={styles.iconStyle}/>
        <TextInput
          placeholder="MM"
          style={styles.inputStyle}
          value={20}
          onChangeText={newTerm => submitTime(newTerm)}
          autoCapitalize='none'
          autoCorrect={false}
          onEndEditing={submitTime}
        />
      </View>;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.viewContainer}>
      {displayTimerInput()}
      <SafeAreaView style={styles.container}>
        <Countdown
          ref={countdownRef}
          style={styles.timer}
          textStyle={styles.timerText}
          initialSeconds={initialSeconds}
          onTimes={e => {
          }}
          onPause={e => {
            setPaused(true);
          }}
          onEnd={(e) => {
            setPaused(true);
          }}
        />
        <View style={styles.timerControls}>
          <TouchableOpacity onPress={() => {
            if (paused) {
              countdownRef.current.resume();
              setPaused(false);
              setStopped(false);
            } else if (stopped) {
              countdownRef.current.start();
              setPaused(false);
              setStopped(false);
            }
          }}>
            <FontAwesome style={styles.timerIconButton} name='play' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {countdownRef.current.pause();}}>
            <FontAwesome style={styles.timerIconButton} name='pause' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            countdownRef.current.stop();
            setStopped(true);
            setPaused(true);
          }}>
            <FontAwesome style={styles.timerIconButton} name='stop' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  viewContainer: {
    height: 100,
    flexDirection: 'row'
  },
  // timer setting
  timerInput: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    width: 120
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 38,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  // timer
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  timer: {
    marginVertical: 10,
  },
  timerText: {
    fontSize: 20
  },
  button: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 100,
  },
  timerIconButton: {
    fontSize: 30,
    marginVertical: 5,
    paddingHorizontal: 15
  },
  timerControls: {
    flexDirection: 'row'
  }
});