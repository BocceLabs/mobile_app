// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ThrowClassRatings from "./ThrowClassRatings";

// part 2 - create a component
const BocceFrameSingle = ( {frameInfo, gameInfo}) => {

  const isOdd = (frameNumber) => {
    return frameNumber % 2;
  };

  return (
    <View
      style={styles.container}
      backgroundColor={isOdd(frameInfo.frameNumber) ? '#D9F5F7': 'white'}
    >
      <Text style={styles.frameNumber}>{frameInfo.frameNumber}</Text>
      <Text style={[styles.score, {color: gameInfo.teamAColor}]}>{frameInfo.teamAScore}</Text>
      <ThrowClassRatings
        style={styles.classRatings}
        frameInfo={frameInfo}
        gameInfo={gameInfo}
        team='A'
        teamColor={gameInfo.teamAColor}
      />
      <ThrowClassRatings
        style={styles.classRatings}
        frameInfo={frameInfo}
        gameInfo={gameInfo}
        team='B'
        teamColor={gameInfo.teamBColor}
      />
      <Text style={[styles.score, {color: gameInfo.teamBColor}]}>{frameInfo.teamBScore}</Text>
    </View>
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
  frameNumber: {
    fontSize: 15
  },
  score: {
    fontWeight: 'bold',
    fontSize: 26
  },
  classRatings: {
  }
});

// part 4 - export the component
export default BocceFrameSingle;