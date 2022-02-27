// part 1 - imports
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import HomeScreenButton from "../components/HomeScreenButton";


// part 2 - create a component
const HomeScreenABC = () => {

  return (
    <View>
      <Image style={styles.bannerImage} source={require("../../assets/ABCMainTransparent.png")} />
      <View style={styles.buttonContainer}>
        <HomeScreenButton
          icon={{iconType: 'FontAwesome', iconName: 'calendar', iconColor: '#00A1CB'}}
          imageSource={null}
          bottomText="Schedule"
        />
        <HomeScreenButton
          icon={{iconType: 'Ionicons', iconName: 'stats-chart-outline', iconColor: '#6754A5'}}
          imageSource={null}
          bottomText="Stats"
        />
        <HomeScreenButton
          icon={{iconType: 'Entypo', iconName: 'line-graph', iconColor: '#DB89BA'}}
          imageSource={null}
          bottomText="Ratings"
        />
        <HomeScreenButton
          icon={null}
          imageSource={require('../../assets/referee.png')}
          bottomText="Referee"
        />
        <HomeScreenButton
          icon={null}
          imageSource={require('../../assets/abc.png')}
          bottomText="Manage League"
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
export default HomeScreenABC;