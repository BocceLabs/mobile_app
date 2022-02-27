// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import HomeScreenButton from "../components/HomeScreenButton";
import {withNavigation} from "react-navigation";

// part 2 - create a component
const LoggedInHomeScreen = ( {navigation, onLogoutPress} ) => {

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ABC')}
      >
        <HomeScreenButton
          icon={null}
          imageSource={require('../../assets/abc.png')}
          bottomText="American Bocce Co."
        />
      </TouchableOpacity>
      <HomeScreenButton
        icon={null}
        imageSource={require('../../assets/Mark-2C-Teal.png')}
        bottomText="Oddball Events"
      />
      <HomeScreenButton
        icon={null}
        imageSource={require('../../assets/world-wiffle-ball.png')}
        bottomText="World Wiffle Ball"
      />
      <HomeScreenButton
        icon={{iconType: 'MaterialIcons', iconName: 'message', iconColor: '#DB89BA'}}
        imageSource={null}
        bottomText="Contact"
      />
      <TouchableOpacity
        onPress={onLogoutPress}
      >
        <HomeScreenButton
          icon={{iconType: 'MaterialIcons', iconName: 'logout', iconColor: 'gray'}}
          imageSource={null}
          bottomText="Logout"
        />
      </TouchableOpacity>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15
  },
});

// part 4 - export the component
export default withNavigation(LoggedInHomeScreen);