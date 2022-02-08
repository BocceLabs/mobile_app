// part 1 - imports
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ClassRatingIcon from './ClassRatingIcon';

// part 2 - create a component
const ThrowClassRatings = ( {player1Name, player2Name, team, teamName, frameNumber, teamColor, throwNumber, onChangeThrowNumber, theThrows, onChangeTheThrows} ) => {
  
  const [ratingP1t0, setRatingP1t0] = useState(-2);
  const [ratingP1t1, setRatingP1t1] = useState(-2);
  const [ratingP2t0, setRatingP2t0] = useState(-2);
  const [ratingP2t1, setRatingP2t1] = useState(-2);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.throwerName}>{player1Name}</Text>
        <ClassRatingIcon
          color={teamColor}
          id={'f' + frameNumber.toString() + '_t' + throwNumber.toString()}
          teamName={teamName}
          playerName={player1Name}
          rating={ratingP1t0}
          onChangeRating={setRatingP1t0}
          throwNumber={throwNumber}
          onChangeThrowNumber={onChangeThrowNumber}
          theThrows={theThrows}
          onChangeTheThrows={onChangeTheThrows}
        />
        <ClassRatingIcon
          color={teamColor}
          id={'f' + frameNumber.toString() + '_t' + throwNumber.toString()}
          teamName={teamName}
          playerName={player1Name}
          rating={ratingP1t1}
          onChangeRating={setRatingP1t1}
          throwNumber={throwNumber}
          onChangeThrowNumber={onChangeThrowNumber}
          theThrows={theThrows}
          onChangeTheThrows={onChangeTheThrows}
        />
      </View>
      <View>
        <Text style={styles.throwerName}>{player2Name}</Text>
        <ClassRatingIcon
          color={teamColor}
          id={'f' + frameNumber.toString() + '_t' + throwNumber.toString()}
          teamName={teamName}
          playerName={player2Name}
          onChangeRating={setRatingP2t0}
          rating={ratingP2t0}
          throwNumber={throwNumber}
          onChangeThrowNumber={onChangeThrowNumber}
          theThrows={theThrows}
          onChangeTheThrows={onChangeTheThrows}
        />
        <ClassRatingIcon
          color={teamColor}
          id={'f' + frameNumber.toString() + '_t' + throwNumber.toString()}
          teamName={teamName}
          playerName={player2Name}
          rating={ratingP2t1}
          onChangeRating={setRatingP2t1}
          throwNumber={throwNumber}
          onChangeThrowNumber={onChangeThrowNumber}
          theThrows={theThrows}
          onChangeTheThrows={onChangeTheThrows}
        />
      </View>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  throwerName: {
    fontSize: 9,
    padding: 5,
    textAlign: 'center'
  },
  throw: {
    flexDirection: 'column',
    fontSize: 35,
    padding: 5,
    textAlign: 'center'
  }
});

// part 4 - export the component
export default ThrowClassRatings;