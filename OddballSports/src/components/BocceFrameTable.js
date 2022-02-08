// part 1 - imports
import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import BocceFrameSingle from "./BocceFrameSingle";

// part 2 - create a component
const BocceFrameTable = ( {gameResults } ) => {

  const [frameResults, setFrameResults] = useState([]);


  const onPressAddFrame = () => {
    const keyName = 'f' + (Object.keys(frameResults).length + 1).toString().padStart(3, '0');

    setFrameResults( [...frameResults,  {
        id: 'f' + (Object.keys(frameResults).length + 1).toString(),
        frame_number: Object.keys(frameResults).length + 1,
        score: {
          team_a: null,
          team_b: null
        },
        the_throws: []
      }]);

      console.log(frameResults);
  };

  const onAddThrow = (frameNumber, theThrow) => {
    frameResults['f' + frameNumber.toString()].the_throws.push(theThrow);
    setFrameResults( frameResults );
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
        data={frameResults}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <BocceFrameSingle
            frameInfoSingle={item}
            onFrameResultsChange={setFrameResults}
            gameInfo={gameResults}
          />;
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
    height: 500
  }
});

// part 4 - export the component
export default BocceFrameTable;