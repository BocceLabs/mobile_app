// part 1 - imports
import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import MenuIconButton from "../components/MenuIconButton";
import {withNavigation} from "react-navigation";
import * as WebBrowser from 'expo-web-browser'


// part 2 - create a component
const ABCMenuScreen = ({ navigation } ) => {

  return (
    <View>
      <Image style={styles.bannerImage} source={require("../../assets/ABCMainTransparent.png")} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RefereeMenu')}
        >
          <MenuIconButton
            icon={null}
            imageSource={require('../../assets/referee.png')}
            bottomText="Referee"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            let result = await WebBrowser.openBrowserAsync('https://americanbocceco.leagueapps.com');
          }}
        >
          <MenuIconButton
            icon={null}
            imageSource={require('../../assets/abc.png')}
            bottomText="Manage League"
          />
        </TouchableOpacity>
        <MenuIconButton
          icon={{iconType: 'FontAwesome', iconName: 'calendar', iconColor: 'gray'}}
          imageSource={null}
          bottomText="Schedule"
        />
        <MenuIconButton
          icon={{iconType: 'Ionicons', iconName: 'stats-chart-outline', iconColor: 'gray'}}
          imageSource={null}
          bottomText="Stats"
        />
        <MenuIconButton
          icon={{iconType: 'Entypo', iconName: 'line-graph', iconColor: 'gray'}}
          imageSource={null}
          bottomText="Ratings"
        />
      </View>
    </View>
  );
};

// part 3 - create stylesheet
const styles = StyleSheet.create({
  bannerImage: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15
  },
});

// part 4 - export the component
export default withNavigation(ABCMenuScreen);