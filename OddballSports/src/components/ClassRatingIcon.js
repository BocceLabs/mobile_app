// part 1 - imports
import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

// part 2 - create a component
const ClassRatingIcon = ( {color, id, teamName, playerName, rating, onChangeRating, throwNumber, onChangeThrowNumber, theThrows, onChangeTheThrows} ) => {

  // ellipsis1, minus, dot, plus, pluscircleo
  const [iconName, setIconName] = useState('ellipsis1');
  const [ratingIndex, setRatingIndex] = useState(0);
  const ratings = ['ellipsis1', 'minus', 'swap', 'plus', 'pluscircleo'];
  const [unlocked, setIsUnlocked] = useState(false);
  const [iconColor, setIconColor] = useState('lightgray');
  const [changeTimeout, setChangeTimeout] = useState(false);

  const changeRating = () => {
    if (unlocked) {
      if (ratingIndex + 1 > 4) {
        setRatingIndex(1);
      } else {
        setRatingIndex(ratingIndex + 1);
      };
      setIconName(ratings[ratingIndex]);

      if (!changeTimeout) {
        setChangeTimeout(true );
        setTimeout(() => {
          setIsUnlocked(false);
          ratingIndex > 0 ? setIconColor(color) : setIconColor('lightgray');
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }, 5000);
      };
    };
  };

  const unlockRating = () => {
    setIsUnlocked(true);
    setChangeTimeout(false);
    setIconColor('gray');
    setRatingIndex(1);
    setIconName(ratings[ratingIndex]);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Medium);
    setTimeout(() => {
      setIconColor('lightgray');
      setIsUnlocked(false);
    }, 5000);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        changeRating();
      }}
      onLongPress={() => {
        unlockRating();
      }}
    >
      <AntDesign
        name={iconName}
        style={[styles.icon, {color: iconColor}]}
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