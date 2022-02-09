// part 1 - imports
import React, { useReducer, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ClassRatingIcon from './ClassRatingIcon';

// reducer
const reducer = (state, action) => {
  // state === { p1t1: number, p1t2: number, p2t1: number, p2t2: number }
  // action === { throwToChange: 'p1t1' || 'p1t2' || 'p2t1' || 'p2t2', amount: 1 }

  let value = 0;

  switch (action.throwToChange) {
    case 'p1t1':
      state.p1t1 + action.amount > 2 ? value = -1 : value = state.p1t1 + action.amount
      // don't make changes directly to state
      // rebuild the object instead
      return { ...state, p1t1: value};
    case 'p1t2':
      state.p1t2 + action.amount > 2 ? value = -1 : value = state.p1t2 + action.amount
      return { ...state, p1t2: value};
    case 'p2t1':
      state.p2t1 + action.amount > 2 ? value = -1 : value = state.p2t1 + action.amount
      return { ...state, p2t1: value};
    case 'p2t2':
      state.p2t2 + action.amount > 2 ? value = -1 : value = state.p2t2 + action.amount
      return { ...state, p2t2: value};
    default:
      return state;
  }
};


// part 2 - create a component
const ThrowClassRatings = ( {player1Name, player2Name, team, teamName, frameNumber, teamColor, throwNumber, onChangeThrowNumber, theThrows, onChangeTheThrows} ) => {

  // reducer state
  const [state, dispatch] = useReducer(reducer, { p1t1: -2, p1t2: -2, p2t1: -2, p2t2: -2 });

  // pull out the values from the state
  const {p1t1, p1t2, p2t1, p2t2} = state;

  useEffect(() => {
    console.log(state);
  }, [state]);


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.throwerName}>{player1Name}</Text>
        <ClassRatingIcon
          color={teamColor}
          onIncrease={() => dispatch({throwToChange: 'p1t1', amount: 1})}
          theThrow={p1t1}
        />
        <ClassRatingIcon
          color={teamColor}
          onIncrease={() => dispatch({throwToChange: 'p1t2', amount: 1})}
          theThrow={p1t2}
        />
      </View>
      <View>
        <Text style={styles.throwerName}>{player2Name}</Text>
        <ClassRatingIcon
          color={teamColor}
          onIncrease={() => dispatch({throwToChange: 'p2t1', amount: 1})}
          theThrow={p2t1}
        />
        <ClassRatingIcon
          color={teamColor}
          onIncrease={() => dispatch({throwToChange: 'p2t2', amount: 1})}
          theThrow={p2t2}
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