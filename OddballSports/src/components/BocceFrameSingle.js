// part 1 - imports
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import ThrowClassRatings from "./ThrowClassRatings";
import * as Haptics from "expo-haptics";

// part 2 - create a component
const BocceFrameSingle = ( {frameInfoSingle, frameResults, onChangeFrameResults, gameResults, onChangeGameResults}) => {

  // state
  const [throwNumber, setThrowNumber] = useState(0);
  const [theThrows, setTheThrows] = useState({});
  const [frameScoreAUnlocked, setFrameScoreAUnlocked] = useState(false);
  const [frameScoreBUnlocked, setFrameScoreBUnlocked] = useState(false);
  const [frameScoreA, setFrameScoreA] = useState(null);
  const [frameScoreB, setFrameScoreB] = useState(null);
  const [frameScoreAColor, setFrameScoreAColor] = useState('lightgray');
  const [frameScoreBColor, setFrameScoreBColor] = useState('lightgray');
  const [classRatingIconColorA, setClassRatingIconColorA] = useState('lightgray');
  const [classRatingIconColorB, setClassRatingIconColorB] = useState('lightgray');

  const isOdd = (frameNumber) => {
    return frameNumber % 2;
  };

  const changeFrameScore = (team) => {
    if (team === 'A' && frameScoreAUnlocked) {
      setFrameScoreA(frameScoreA === null || frameScoreA >= 4 ? 1 : frameScoreA + 1);
    } else if (team === 'B' && frameScoreBUnlocked) {
      setFrameScoreB(frameScoreB === null || frameScoreB >= 4 ? 1 : frameScoreB + 1);
    }
  };

  const unlockFrameScore = (team) => {
    if (team === 'A') {
      setFrameScoreAUnlocked(true);
      setFrameScoreB(null);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Medium);
      setFrameScoreAColor('gray');
      setTimeout(() => {
        setFrameScoreAUnlocked(false);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, 5000);
    } else if (team === 'B') {
      setFrameScoreBUnlocked(true);
      setFrameScoreA(null);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Medium);
      setFrameScoreBColor('gray');
      setTimeout(() => {
        setFrameScoreBUnlocked(false);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, 5000);
    }
  };

  useEffect(() => {
    frameScoreAUnlocked ? setFrameScoreAColor('gray') : frameScoreA === null ? setFrameScoreAColor('lightgray') : setFrameScoreAColor(gameResults.teams.team_a.color);
    setClassRatingIconColorA(gameResults.teams.team_a.color);
  }, [frameScoreA, frameScoreAUnlocked, gameResults]);

  useEffect(() => {
    frameScoreBUnlocked ? setFrameScoreBColor('gray') : frameScoreB === null ? setFrameScoreBColor('lightgray') : setFrameScoreBColor(gameResults.teams.team_b.color);
    setClassRatingIconColorB(gameResults.teams.team_b.color);
  }, [frameScoreB, frameScoreBUnlocked, gameResults]);

  useEffect(() => {
    onChangeFrameResults(frameResults => {
      const itemIndex = frameResults.findIndex(item => item.id  === frameInfoSingle.id)
      return [
        ...frameResults.slice(0, itemIndex),
        {
          ...frameResults[itemIndex],
          score: {team_a: frameScoreA, team_b: frameScoreB}
        },
        ...frameResults.slice(itemIndex + 1)
     ]
    });

    //onChangeGameResults({...gameResults, teams: {...gameResults.teams, team_a: {...gameResults.teams.team_a, score: 5}}});


  }, [frameScoreA, frameScoreB]);

  return (
    <View
      style={styles.container}
      backgroundColor={isOdd(frameInfoSingle.frame_number) ? '#D9F5F7': 'white'}
    >
      <Text style={styles.frameNumber}>{frameInfoSingle.frame_number}</Text>
      <TouchableOpacity
        onPress={() => {
          changeFrameScore('A')
        }}
        onLongPress={() => {
          unlockFrameScore('A')
        }}
      >
        <Text style={[styles.score, {color: frameScoreAColor}]}>{frameScoreA === null ? '—' : frameScoreA}</Text>
      </TouchableOpacity>
      <ThrowClassRatings
        style={styles.classRatings}
        player1Name={gameResults.teams.team_a.players[isOdd(frameInfoSingle.frame_number) ? 0 : 2]}
        player2Name={gameResults.teams.team_a.players[isOdd(frameInfoSingle.frame_number) ? 1 : 3]}
        color={classRatingIconColorA}
      />
      <ThrowClassRatings
        style={styles.classRatings}
        player1Name={gameResults.teams.team_b.players[isOdd(frameInfoSingle.frame_number) ? 0 : 2]}
        player2Name={gameResults.teams.team_b.players[isOdd(frameInfoSingle.frame_number) ? 1 : 3]}
        color={classRatingIconColorB}
      />
      <TouchableOpacity
        onPress={() => {
          changeFrameScore('B')
        }}
        onLongPress={() => {
          unlockFrameScore('B')
        }}
      >
        <Text style={[styles.score, {color: frameScoreBColor}]}>{frameScoreB === null ? '—' : frameScoreB}</Text>
      </TouchableOpacity>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-around',
    height: 120
  },
  frameNumber: {
    fontSize: 15,
    paddingLeft: 2,
    textAlign: 'center'
  },
  score: {
    fontWeight: 'bold',
    fontSize: 26,
    margin: 4,
    width: 50,
    textAlign: 'center'
  },
  classRatings: {
  }
});

// part 4 - export the component
export default BocceFrameSingle;