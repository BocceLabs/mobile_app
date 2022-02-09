// part 1 - imports
import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import * as Haptics from "expo-haptics";

// part 2 - create a component
const Score = ( {gameResults, onChangeGameResults, scoreA, scoreB} ) => {

  const COLORS = ['red', 'magenta', 'blue', 'green', 'teal', 'orange', 'black'];
  const [colorIndexA, setColorIndexA] = useState(0);
  const [colorIndexB, setColorIndexB] = useState(0);

  const teamNamePressed = (team) => {
    if (team === 'A') {
      setColorIndexA(colorIndexA < COLORS.length ? colorIndexA + 1 : 0)
      onChangeGameResults({...gameResults, teams: {...gameResults.teams, team_a: {...gameResults.teams.team_a, color: COLORS[colorIndexA]}}});
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else if (team === 'B') {
      setColorIndexB(colorIndexB < COLORS.length ? colorIndexB + 1 : 0)
      onChangeGameResults({...gameResults, teams: {...gameResults.teams, team_b: {...gameResults.teams.team_b, color: COLORS[colorIndexB]}}});
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onLongPress={() => {teamNamePressed('A')}}>
          <Text style={[styles.teamName, {color: gameResults.teams.team_a.color}]}>{gameResults.teams.team_a.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onLongPress={() => {teamNamePressed('B')}}>
          <Text style={[styles.teamName, {color: gameResults.teams.team_b.color}]}>{gameResults.teams.team_b.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={[styles.score, {color: gameResults.teams.team_a.color}]}>{gameResults.teams.team_a.score}</Text>
        <Text style={[styles.score, {color: gameResults.teams.team_b.color}]}>{gameResults.teams.team_b.score}</Text>
      </View>
    </>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-around'
  },
  teamName: {
    fontSize: 20
  },
  score: {
    fontSize: 40
  }

});

// part 4 - export the component
export default Score;