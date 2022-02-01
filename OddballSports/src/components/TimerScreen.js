import React, {useRef} from 'react';
import {StyleSheet, Button, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import {Timer, Countdown} from 'react-native-element-timer';
import {FontAwesome} from "@expo/vector-icons";

const TimerScreen = _props => {
  const timerRef = useRef(null);
  const countdownRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Countdown:</Text>
      <Countdown
        ref={countdownRef}
        style={styles.timer}
        textStyle={styles.timerText}
        initialSeconds={1200}
        onTimes={e => {}}
        onPause={e => {}}
        onEnd={(e) => {}}
      />
      <View style={styles.timerControls}>
        <TouchableOpacity onPress={() => {countdownRef.current.start();}}>
          <FontAwesome style={styles.timerIconButton} name='play' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {countdownRef.current.pause();}}>
          <FontAwesome style={styles.timerIconButton} name='pause' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {countdownRef.current.resume();}}>
          <FontAwesome style={styles.timerIconButton} name='play' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {countdownRef.current.stop();}}>
          <FontAwesome style={styles.timerIconButton} name='stop' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 40,
  },
  timer: {
    marginVertical: 10,
  },
  timerText: {
    fontSize: 20,
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