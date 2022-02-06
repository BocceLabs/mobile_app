// part 1 - imports
import React, { useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

// part 2 - create a component
const ClassRatingIcon = ( {color, id, onChangeRating} ) => {

  // ellipsis1, minus, dot, plus, pluscircleo
  const [iconName, setIconName] = useState('ellipsis1');
  const [ratingIndex, setRatingIndex] = useState(0);
  const ratings = ['ellipsis1', 'minus', 'swap', 'plus', 'pluscircleo'];
  const [unlocked, setIsUnlocked] = useState(false);
  const [iconColor, setIconColor] = useState('lightgray');
  const [changeTimeout, setChangeTimeout] = useState(false);

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };


  const changeRating = () => {
    if (unlocked) {
      setRatingIndex(ratingIndex + 1 > 4 ? 1 : ratingIndex + 1);
      setIconName(ratings[ratingIndex]);
      onChangeRating(ratingIndex - 2);
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
      setRatingIndex(0);
      setIconColor('lightgray');
      setIsUnlocked(false);
    }, 6000);
  }

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