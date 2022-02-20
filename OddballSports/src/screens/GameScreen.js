// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import GameScreenNavButton from "../components/GameScreenNavButton";
import { withNavigation } from "react-navigation";

// part 2 - create a component
const GameScreen = ( { navigation } ) => {

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewGame')}
      >
        <GameScreenNavButton iconName="post-add" title="New Game"/>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('FindGame')}
      >
        <GameScreenNavButton iconName="search" title="Find Game" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Referee')}
      >
        <GameScreenNavButton iconName="videogame-asset" title="Referee Game" />
      </TouchableOpacity>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({

});

// part 4 - export the component
export default withNavigation(GameScreen);