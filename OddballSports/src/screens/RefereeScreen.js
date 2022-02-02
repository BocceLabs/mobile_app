// part 1 - imports
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BocceFrameTable from "../components/BocceFrameTable";
import Score from "../components/Score";
import TimerScreen from "../components/TimerScreen";

// part 2 - create a component
const RefereeScreen = () => {
  const [frameResults, setFrameResults] = useState([
    {
      id: 'f1',
      frameNumber: 1,
      teamAScore: null,
      teamBScore: '3',
      class_ratings: {
        teamAside1player1: [-1, 1],
        teamAside1player2: [0, 0],
        teamBside1player1: [1, -1],
        teamBside1player2: [2, 1],
        teamAside2player1: [0, 1],
        teamAside2player2: [-1, 0],
        teamBside2player1: [0, 0],
        teamBside2player2: [1, 0]
      }
    },
  ])


  const gameResults = {
    teamAName: 'The FCC',
    teamBName: 'Hiss of Death',
    teamAColor: 'blue',
    teamBColor: 'magenta',
    teamAside1player1: 'Alex',
    teamAside1player2: 'Scott',
    teamBside1player1: 'Elizabeth',
    teamBside1player2: 'Lydia',
    teamAside2player1: 'Nick',
    teamAside2player2: 'Patric',
    teamBside2player1: 'Libby',
    teamBside2player2: 'Alicia'
  };

  return (
    <View>
      <Score
        gameResults={gameResults}
        frameResults={frameResults}
        // onFrameResultsChange={setFrameResults}
      />
      <TimerScreen />
      <BocceFrameTable
        gameResults={gameResults}
        frameResults={frameResults}
        onFrameResultsChange={setFrameResults}
      />
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({

});

// part 4 - export the component
export default RefereeScreen;