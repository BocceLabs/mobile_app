// part 1 - imports
import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

// part 2 - create a component
const ClassRatingIcon = ( {color, onIncrease, theThrow} ) => {

  // ellipsis1, minus, dot, plus, pluscircleo
  const [iconName, setIconName] = useState('ellipsis1');
  const [ratingIndex, setRatingIndex] = useState(0);
  const ratings = ['ellipsis1', 'minus', 'swap', 'plus', 'pluscircleo'];
  const [unlocked, setIsUnlocked] = useState(false);
  const [iconColor, setIconColor] = useState('lightgray');
  const [changeTimeout, setChangeTimeout] = useState(false);

  const changeRating = () => {
    if (unlocked) {
      onIncrease();
      if (!changeTimeout) {
        setChangeTimeout(true );
        setTimeout(() => {
          setIsUnlocked(false);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }, 5000);
      };
    };
  };

  const unlockRating = () => {
    setIsUnlocked(true);
    setChangeTimeout(false);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Medium);
    setTimeout(() => {
      setIsUnlocked(false);
    }, 5000);
  };

  useEffect(() => {
    setRatingIndex(theThrow + 2);
  }, [theThrow]);

  useEffect(() => {
    setIconName(ratings[ratingIndex]);
  }, [ratingIndex]);

  useEffect( () => {
    if (!unlocked && ratingIndex > 0) {
      setIconColor(color);
    } else if (unlocked) {
      setIconColor('gray');
    }
  }, [unlocked, ratingIndex, color]);


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