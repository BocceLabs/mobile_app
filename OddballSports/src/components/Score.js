// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// part 2 - create a component
const Score = ( {gameResults, frameResults} ) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.teamName, {color: gameResults.teams.team_a.color}]}>{gameResults.teams.team_a.name}</Text>
        <Text style={[styles.teamName, {color: gameResults.teams.team_b.color}]}>{gameResults.teams.team_b.name}</Text>
      </View>
      <View style={styles.container}>
        <Text style={[styles.score, {color: gameResults.teams.team_a.color}]}>{gameResults.teams.team_a.score}</Text>
        <Text style={[styles.score, {color: gameResults.teams.team_b.color}]}>{gameResults.teams.team_a.score}</Text>
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