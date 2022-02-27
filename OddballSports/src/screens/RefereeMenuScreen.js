// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import MenuIconButton from "../components/MenuIconButton";
import { withNavigation } from "react-navigation";

// part 2 - create a component
const RefereeMenuScreen = ({ navigation } ) => {

  return (
    <View>
      <Image style={styles.bannerImage} source={require("../../assets/ABCMainTransparent.png")} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewGame')}
        >
          <MenuIconButton
            icon={{iconType: 'Entypo', iconName: 'new-message', iconColor: 'gray'}}
            imageSource={null}
            bottomText="New Game"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('FindGame')}
        >
          <MenuIconButton
            icon={{iconType: 'MaterialIcons', iconName: 'search', iconColor: 'gray'}}
            imageSource={null}
            bottomText="Find Game"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('RunGame')}
        >
          <MenuIconButton
            icon={{iconType: 'MaterialIcons', iconName: 'videogame-asset', iconColor: '#DB89BA'}}
            imageSource={null}
            bottomText="Run game"
          />
        </TouchableOpacity>
      </View>
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
  bannerImage: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    margin: 10
  },
});

// part 4 - export the component
export default withNavigation(RefereeMenuScreen);