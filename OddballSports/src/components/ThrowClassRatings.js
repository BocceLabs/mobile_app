// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// part 2 - create a component
const ThrowClassRatings = ( {frameInfo, gameInfo, team, teamColor} ) => {

  const isOdd = (frameNumber) => {
    return frameNumber % 2;
  };

  const playerName = (frameInfo, gameInfo, team, player) => {
    switch (team) {
      case 'A':
        return isOdd(frameInfo.frameNumber) ? (player === 1 ? gameInfo.teamAside1player1 : gameInfo.teamAside1player2): (player === 2 ? gameInfo.teamAside2player1 : gameInfo.teamAside2player2);
      case 'B':
        return isOdd(frameInfo.frameNumber) ? (player === 1 ? gameInfo.teamBside1player1 : gameInfo.teamBside1player2): (player === 2 ? gameInfo.teamBside2player1 : gameInfo.teamBside2player2);
      default:
        return '';
    };
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.throwerName}>{playerName(frameInfo, gameInfo, team, 1)}</Text>
        <AntDesign
          name="ellipsis1"
          style={[styles.icon, {color: teamColor}]}
        />
        <AntDesign
          name="minuscircleo"
          style={[styles.icon, {color: teamColor}]}
        />
      </View>
      <View>
        <Text style={styles.throwerName}>{playerName(frameInfo, gameInfo, team, 2)}</Text>
        <AntDesign
          name="plus"
          style={[styles.icon, {color: teamColor}]}
        />
        <AntDesign
          name="pluscircleo"
          style={[styles.icon, {color: teamColor}]}
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
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    padding: 7
  }
});

// part 4 - export the component
export default ThrowClassRatings;