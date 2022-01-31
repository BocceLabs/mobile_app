// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// part 2 - create a component
const Score = ( {gameResults, frameResults} ) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.teamName, {color: gameResults.teamAColor}]}>The FCC</Text>
        <Text style={[styles.teamName, {color: gameResults.teamBColor}]}>Hiss of Death</Text>
      </View>
      <View style={styles.container}>
        <Text style={[styles.score, {color: gameResults.teamAColor}]}>1</Text>
        <Text style={[styles.score, {color: gameResults.teamBColor}]}>5</Text>
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