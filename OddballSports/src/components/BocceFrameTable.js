// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import BocceFrameSingle from "./BocceFrameSingle";

// part 2 - create a component
const BocceFrameTable = ( {gameResults, frameResults, onFrameResultsChange } ) => {



  const onPressAddFrame = () => {
    frameResults['f' + (Object.keys(frameResults).length + 1).toString()] = {
      id: 'f' + (Object.keys(frameResults).length + 1).toString(),
      frame_number: Object.keys(frameResults).length + 1,
      score: {
        team_a: null,
        team_b: null
      },
      the_throws: []
    };
    onFrameResultsChange( frameResults );
    console.log( frameResults );
  };

  const onAddThrow = (frameNumber, theThrow) => {
    frameResults['f' + frameNumber.toString()].the_throws.push(theThrow);
    onFrameResultsChange(frameResults );
  }



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
        data={Object.values(frameResults)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <BocceFrameSingle
            frameInfoSingle={item}
            onFrameResultsChange={onFrameResultsChange}
            gameInfo={gameResults} />;
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