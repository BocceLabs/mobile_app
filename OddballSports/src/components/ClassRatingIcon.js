// part 1 - imports
import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// part 2 - create a component
const ClassRatingIcon = ( {teamColor} ) => {

  // ellipsis1, minus, dot, plus, pluscircleo
  const [iconName, setIconName] = useState('ellipsis1');
  const [ratingIndex, setRatingIndex] = useState(0);
  const ratings = ['ellipsis1', 'minus', 'swap', 'plus', 'pluscircleo'];

  const changeRating = () => {
    setRatingIndex(ratingIndex + 1 > 4 ? 1 : ratingIndex + 1);
    setIconName(ratings[ratingIndex]);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        changeRating();
      }}
    >
      <AntDesign
        name={iconName}
        style={[styles.icon, {color: {teamColor}}]}
      />
    </TouchableOpacity>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    padding: 7
  }
});

// part 4 - export the component
export default ClassRatingIcon;