// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

// part 2 - create a component
const GameScreenNavButton = ( {iconName, title} ) => {

  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 20
  },
  title: {
    fontSize: 40,
    paddingLeft: 20
  },
  icon: {
    fontSize: 60,
    padding: 10,
    alignSelf: 'center'
  }
});

// part 4 - export the component
export default GameScreenNavButton;