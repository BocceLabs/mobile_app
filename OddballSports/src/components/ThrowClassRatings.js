// part 1 - imports
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ClassRatingIcon from './ClassRatingIcon';

// part 2 - create a component
const ThrowClassRatings = ( {player1Name, player2Name, team, teamColor, throwNumber, onChangeThrowNumber} ) => {
  
  const [rating, setRating] = useState(-2);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.throwerName}>{player1Name}</Text>
        <ClassRatingIcon
          color={teamColor}
          id={'team_' + team + '_p1_throw1'}
          onChangeRating={setRating}
        />
        <ClassRatingIcon
          color={teamColor}
          id={'team_' + team + '_p1_throw2'}
          onChangeRating={setRating}
        />
      </View>
      <View>
        <Text style={styles.throwerName}>{player2Name}</Text>
        <ClassRatingIcon
          color={teamColor}
          id={'team_' + team + '_p2_throw1'}
          onChangeRating={setRating}
        />
        <ClassRatingIcon
          color={teamColor}
          id={'team_' + team + '_p2_throw2'}
          onChangeRating={setRating}
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