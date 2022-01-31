// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import BocceFrameSingle from "./BocceFrameSingle";

// part 2 - create a component
const BocceFrameTable = ( {gameResults, frameResults, onFrameResultsChange } ) => {


  const onPressAddFrame = () => {
    onFrameResultsChange( [...frameResults,
      {
        id: 'f' + (frameResults.length + 1).toString(),
        frameNumber: frameResults.length + 1,
        teamAScore: null,
        teamBScore: null,
        class_ratings: {
          teamAside1player1: [0, 0],
          teamAside1player2: [0, 0],
          teamBside1player1: [0, 0],
          teamBside1player2: [0, 0],
          teamAside2player1: [0, 0],
          teamAside2player2: [0, 0],
          teamBside2player1: [0, 0],
          teamBside2player2: [0, 0]
        }
      }]
    )
  };

  return (
    <View>
      <TouchableOpacity
        title="Add Frame"
        style={styles.addFrameButton}
        onPress={onPressAddFrame}
      >
        <Text>Add Frame</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.framesList}
        data={frameResults}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <BocceFrameSingle frameInfo={item} gameInfo={gameResults} />;
        }}
      />
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  bocceFrame: {
    alignItems: 'stretch'
  },
  addFrameButton: {
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'lightgreen'
  },
  framesList: {
    height: 300
  }
});

// part 4 - export the component
export default BocceFrameTable;