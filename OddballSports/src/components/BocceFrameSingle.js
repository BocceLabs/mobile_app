// part 1 - imports
import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ThrowClassRatings from "./ThrowClassRatings";

// part 2 - create a component
const BocceFrameSingle = ( {frameInfoSingle, onFrameResultsChange, gameInfo}) => {

  // state
  const [throwNumber, setThrowNumber] = useState(0);

  const isOdd = (frameNumber) => {
    console.log(frameInfoSingle);
    return frameNumber % 2;
  };

  return (
    <View
      style={styles.container}
      backgroundColor={isOdd(frameInfoSingle.frame_number) ? '#D9F5F7': 'white'}
    >
      <Text style={styles.frameNumber}>{frameInfoSingle.frame_number}</Text>
      <Text style={[styles.score, {color: gameInfo.teams.team_a.color}]}>{frameInfoSingle.score.team_a}</Text>
      <ThrowClassRatings
        style={styles.classRatings}
        player1Name={gameInfo.teams.team_a.players[isOdd(frameInfoSingle.frame_number) ? 0 : 2]}
        player2Name={gameInfo.teams.team_a.players[isOdd(frameInfoSingle.frame_number) ? 1 : 3]}
        team="a"
        teamColor={gameInfo.teams.team_a.color}
        throwNumber={throwNumber}
        onChangeThrowNumber={setThrowNumber}
      />
      <ThrowClassRatings
        style={styles.classRatings}
        player1Name={gameInfo.teams.team_b.players[isOdd(frameInfoSingle.frame_number) ? 0 : 2]}
        player2Name={gameInfo.teams.team_b.players[isOdd(frameInfoSingle.frame_number) ? 1 : 3]}
        team="b"
        teamColor={gameInfo.teams.team_b.color}
        throwNumber={throwNumber}
        onChangeThrowNumber={setThrowNumber}
      />
      <Text style={[styles.score, {color: gameInfo.teams.team_b.color}]}>{frameInfoSingle.score.team_b}</Text>
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