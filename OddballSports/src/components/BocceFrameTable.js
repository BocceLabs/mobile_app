// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import BocceFrameSingle from "./BocceFrameSingle";

// part 2 - create a component
const BocceFrameTable = ( {gameResults, frameResults} ) => {

  return (
    <View>
      <Text style={styles.title}>Frames</Text>
      <FlatList
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
  }
});

// part 4 - export the component
export default BocceFrameTable;