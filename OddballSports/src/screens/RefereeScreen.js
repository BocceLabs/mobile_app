// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BocceFrameTable from "../components/BocceFrameTable";
import Score from "../components/Score";

// part 2 - create a component
const RefereeScreen = () => {

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


  const frameResults = [
    {
      id: 'frame01',
      frameNumber: 1,
      teamAScore: null,
      teamBScore: '3'
    },
    {
      id: 'frame02',
      frameNumber: 2,
      teamAScore: null,
      teamBScore: 1
    },
    {
      id: 'frame03',
      frameNumber: 3,
      teamAScore: null,
      teamBScore: 1
    },
    {
      id: 'frame04',
      frameNumber: 4,
      teamAScore: 1,
      teamBScore: null,
    }
  ];

  return (
    <View>
      <Score
        gameResults={gameResults}
        frameResults={frameResults}
      />
      <BocceFrameTable
        gameResults={gameResults}
        frameResults={frameResults}
      />
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({

});

// part 4 - export the component
export default RefereeScreen;